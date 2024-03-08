import { RouteConfig } from '@diego-langarica/shell/navigation';

export enum Route {
  explore = 'explore',
  routines = 'routines',
  runner = 'runner',
}

export const RouteItem: Record<Route, RouteConfig> = {
  explore: {
    icon: 'explore',
    route: '/',
    name: 'i18n.navigation.explore',
  },
  routines: {
    icon: 'format_list_bulleted',
    route: '/',
    name: 'i18n.navigation.myRoutines',
  },
  runner: {
    icon: 'sports',
    route: '/runner',
    name: 'i18n.navigation.runner',
  },
};

export const RouteItems: RouteConfig[] = Object.values(RouteItem);
