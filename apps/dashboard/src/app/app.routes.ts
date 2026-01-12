import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'statistic',
    loadChildren: () => import('statistic/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'about',
    loadChildren: () => import('about/Routes').then((m) => m!.remoteRoutes),
  },
  // {
  //   path: '',
  //   outlet: 'custom',
  //   loadChildren: () =>
  //     import('todo_creation/Routes').then((m) => m!.remoteRoutes),
  // },
  {
    path: '',
    loadChildren: () => import('todo_list/Routes').then((m) => m!.remoteRoutes),
  },
];
