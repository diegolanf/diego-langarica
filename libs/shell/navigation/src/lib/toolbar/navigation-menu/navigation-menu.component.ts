import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import * as packageInfo from 'package.json';

import { RouteConfig } from '../../route-config.model';

@Component({
  selector: 'dl-navigation-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    TranslocoDirective,
  ],
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuComponent {
  @Input({ required: true }) routeItems!: RouteConfig[];

  readonly version: string = packageInfo.version;
}
