import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import packageInfo from 'package.json';

import { RouteConfig } from '../../route-config.model';

@Component({
  selector: 'diego-langarica-navigation-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    TranslocoModule,
  ],
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuComponent {
  @Input({ required: true }) routeItems!: RouteConfig[];

  readonly version: string = packageInfo.version;
}
