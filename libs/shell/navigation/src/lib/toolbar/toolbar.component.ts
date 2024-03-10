import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  Signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScreenSizeService } from '@dl/shared/ui/services';
import { RxIf } from '@rx-angular/template/if';

import { RouteConfig } from '../route-config.model';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

@Component({
  selector: 'dl-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    NavigationMenuComponent,
    RxIf,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @Input({ required: true }) routeItems!: RouteConfig[];
  @Input({ required: true }) sidenav!: MatSidenav;
  @Input() title?: string;

  readonly mdDown: Signal<boolean> = toSignal(
    inject(ScreenSizeService).mdDown$,
    { initialValue: false },
  );
}
