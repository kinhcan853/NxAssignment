import { Route } from '@angular/router';
import { ToDoCreation } from '../../components/todo-creation/todo_creation.component';
import { RemoteEntry } from './entry';

export const remoteRoutes: Route[] = [
    { path: '', component: RemoteEntry },
    { path: 'create', component: ToDoCreation }
];
