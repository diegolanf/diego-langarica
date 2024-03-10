import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { removeQueryStringsFromUrl } from '@diego-langarica/shared/utility/functions';
import { rxState } from '@rx-angular/state';
import { rxActions } from '@rx-angular/state/actions';
import {
  distinctUntilChanged,
  filter,
  map,
  Observable,
  of,
  startWith,
  withLatestFrom,
} from 'rxjs';

interface HistoryServiceState {
  history: string[];
}

interface HistoryServiceActions {
  back: void;
}

@Injectable({ providedIn: 'root' })
export class HistoryService {
  private readonly actions = rxActions<HistoryServiceActions>();
  private readonly state = rxState<HistoryServiceState>(({ set }) => {
    set({ history: [] });
  });

  /**
   * Navigation history.
   */
  readonly history$: Observable<string[]> = this.state.select('history');

  /**
   * Route to navigate back to (i.e. one before last in navigation history).
   */
  readonly backTo$: Observable<string | undefined> = this.history$.pipe(
    map((history: string[]) => history[history.length - 2]),
  );

  /**
   * Can navigate back, i.e. history contains more than 2 routes.
   */
  readonly canNavigateBack$: Observable<boolean> = this.backTo$.pipe(
    map((backTo: string | undefined) => backTo !== undefined),
  );

  /**
   * Last route in navigation history.
   */
  readonly current$: Observable<string | undefined> = this.history$.pipe(
    map((history: string[]) => history[history.length - 1]),
  );

  constructor(private readonly router: Router) {
    this.state.connect(
      this.router.events.pipe(
        filter(
          (event: unknown): event is NavigationEnd =>
            event instanceof NavigationEnd,
        ),
        map((navigationEnd: NavigationEnd) =>
          removeQueryStringsFromUrl(navigationEnd.urlAfterRedirects),
        ),
        distinctUntilChanged(),
        withLatestFrom(this.current$.pipe(startWith(undefined))),
        filter(([url, last]: [string, string | undefined]) => last !== url),
      ),
      (oldState: HistoryServiceState, [url]: [string, string | undefined]) => ({
        history: [...oldState.history, url],
      }),
    );

    this.state.connect(
      this.actions.back$.pipe(
        withLatestFrom(this.canNavigateBack$),
        filter(([_, canNavigateBack]: [void, boolean]) => canNavigateBack),
      ),
      (oldState: HistoryServiceState) => ({
        history: oldState.history.slice(0, -1),
      }),
    );
  }

  init(): Observable<void> {
    return of();
  }

  /**
   * Remove last route from history.
   */
  back(): void {
    this.actions.back();
  }
}
