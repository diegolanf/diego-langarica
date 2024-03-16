import { RouteConfig } from '@dl/shell/navigation';

export enum Route {
  about = 'about',
  projects = 'projects',
}

export const RouteItem: Record<Route, RouteConfig> = {
  about: {
    icon: 'person',
    route: '/',
    name: 'i18n.navigation.about',
  },
  projects: {
    icon: 'code',
    route: '/projects',
    name: 'i18n.navigation.projects',
  },
};

export const RouteItems: RouteConfig[] = Object.values(RouteItem);
