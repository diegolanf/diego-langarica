import { Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
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
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    SideNavigationComponent,
    ToolbarComponent,
  ],
  selector: 'diego-langarica-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
