import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'todo_creation',
    loadChildren: () =>
      import('todo_creation/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'todo_list',
    loadChildren: () => import('todo_list/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () => import('todo_list/Routes').then((m) => m!.remoteRoutes),
  },
];
