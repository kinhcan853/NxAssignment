import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'todo_list',
    loadChildren: () => import('todo_list/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () => import('todo_list/Routes').then((m) => m!.remoteRoutes),
  },
];
