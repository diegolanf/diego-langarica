import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslocoModule } from '@ngneat/transloco';
import packageInfo from 'package.json';

import { RouteConfig } from '../route-config.model';

@Component({
  selector: 'diego-langarica-side-navigation',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, TranslocoModule],
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavigationComponent {
  @Input({ required: true }) routeItems!: RouteConfig[];

  readonly version: string = packageInfo.version;
}
