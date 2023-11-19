import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { rxState } from '@rx-angular/state';
import { filter, map, Observable } from 'rxjs';

import {
  ScreenSize,
  ScreenSizeBreakpointMap,
  ScreenSizes,
} from './screen-size.model';

export interface ScreenSizeServiceState {
  screenSize: ScreenSize;
  xsDown: boolean;
  xsUp: boolean;
  smDown: boolean;
  smUp: boolean;
  mdDown: boolean;
  mdUp: boolean;
  lgDown: boolean;
  lgUp: boolean;
  xlDown: boolean;
  xlUp: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private readonly state = rxState<ScreenSizeServiceState>(({ connect }) => {
    connect(
      this.breakpointObserver
        .observe([
          Breakpoints.XSmall,
          Breakpoints.Small,
          Breakpoints.Medium,
          Breakpoints.Large,
          Breakpoints.XLarge,
        ])
        .pipe(
          map((state: BreakpointState) =>
            ScreenSizes.find(
              (screenSize: ScreenSize) =>
                state.breakpoints[ScreenSizeBreakpointMap[screenSize]],
            ),
          ),
          filter(
            (screenSize: ScreenSize | undefined): screenSize is ScreenSize =>
              screenSize !== undefined,
          ),
          map((screenSize: ScreenSize) => ({
            screenSize,
            xsDown: screenSize === ScreenSize.XSmall,
            xsUp: screenSize >= ScreenSize.XSmall,
            smDown: screenSize < ScreenSize.Small,
            smUp: screenSize >= ScreenSize.Small,
            mdDown: screenSize < ScreenSize.Medium,
            mdUp: screenSize >= ScreenSize.Medium,
            lgDown: screenSize < ScreenSize.Large,
            lgUp: screenSize >= ScreenSize.Large,
            xlDown: screenSize < ScreenSize.XLarge,
            xlUp: screenSize === ScreenSize.XLarge,
          })),
        ),
    );
  });

  readonly screenSize$: Observable<ScreenSize> =
    this.state.select('screenSize');

  readonly xsDown$: Observable<boolean> = this.state.select('xsDown');
  readonly xsUp$: Observable<boolean> = this.state.select('xsUp');
  readonly smDown$: Observable<boolean> = this.state.select('smDown');
  readonly smUp$: Observable<boolean> = this.state.select('smUp');
  readonly mdDown$: Observable<boolean> = this.state.select('mdDown');
  readonly mdUp$: Observable<boolean> = this.state.select('mdUp');
  readonly lgDown$: Observable<boolean> = this.state.select('lgDown');
  readonly lgUp$: Observable<boolean> = this.state.select('lgUp');
  readonly xlDown$: Observable<boolean> = this.state.select('xlDown');
  readonly xlUp$: Observable<boolean> = this.state.select('xlUp');

  constructor(private readonly breakpointObserver: BreakpointObserver) {}
}
