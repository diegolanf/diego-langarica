import { Component, inject, ViewChild } from '@angular/core';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ScreenSizeService } from '@dl/shared/ui/services';
import {
  SideNavigationComponent,
  ToolbarComponent,
} from '@dl/shell/navigation';
import { rxEffects } from '@rx-angular/state/effects';
import { filter, Observable } from 'rxjs';

import { ApiService } from './api.service';
import { RouteItems } from './route.constants';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    SideNavigationComponent,
    ToolbarComponent,
  ],
  selector: 'home-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('sidenav') sidenav?: MatSidenav;

  private readonly effects = rxEffects();
  private readonly mdUp$: Observable<boolean> = inject(ScreenSizeService).mdUp$;

  readonly navigationMenuItems = RouteItems;

  constructor(apiService: ApiService) {
    // eslint-disable-next-line no-console
    this.effects.register(apiService.getWelcomeMessage(), console.log);

    this.effects.register(
      this.mdUp$.pipe(filter((mdUp: boolean) => mdUp)),
      () => this.sidenav?.close(),
    );
  }
}
