import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    outlet: 'custom',
    loadChildren: () => import('statistic/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'about',
    loadChildren: () => import('about/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () => import('todo_list/Routes').then((m) => m!.remoteRoutes),
  }
];
