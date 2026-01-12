import { Route } from '@angular/router';

export const appRoutes: Route[] = [
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
