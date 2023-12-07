import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ScreenSizeService } from '@diego-langarica/shared/ui/services';
import {
  SideNavigationComponent,
  ToolbarComponent,
} from '@diego-langarica/shell/navigation';

import { RouteItems } from './route.constants';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ToolbarComponent,
    MatSidenavModule,
    SideNavigationComponent,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  selector: 'diego-langarica-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';

  readonly mdDown: Signal<boolean> = toSignal(
    inject(ScreenSizeService).mdDown$,
    { initialValue: false },
  );

  readonly navigationMenuItems = RouteItems;
}
