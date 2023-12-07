import { RouteConfig } from '@diego-langarica/shell/navigation';

export enum Route {
  explore = 'explore',
  routines = 'routines',
  runner = 'runner',
}

export const RouteItem: { [key in Route]: RouteConfig } = {
  explore: {
    icon: 'explore',
    route: '/',
    name: 'navigation.explore',
  },
  routines: {
    icon: 'format_list_bulleted',
    route: '/',
    name: 'navigation.myRoutines',
  },
  runner: {
    icon: 'sports',
    route: '/runner',
    name: 'navigation.runner',
  },
};

export const RouteItems: RouteConfig[] = Object.values(RouteItem);
