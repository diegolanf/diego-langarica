import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ScreenSizeService } from '@dl/shared/ui/services';
import {
  SideNavigationComponent,
  ToolbarComponent,
} from '@dl/shell/navigation';
import { rxEffects } from '@rx-angular/state/effects';

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
  private readonly effects = rxEffects();

  readonly mdDown: Signal<boolean> = toSignal(
    inject(ScreenSizeService).mdDown$,
    { initialValue: false },
  );

  readonly navigationMenuItems = RouteItems;

  constructor(apiService: ApiService) {
    // eslint-disable-next-line no-console
    this.effects.register(apiService.getWelcomeMessage(), console.log);
  }
}
