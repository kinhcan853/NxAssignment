import { Component } from '@angular/core';
import { ToDoList } from '../../components/todolist/todolist.component';

@Component({
  imports: [ToDoList],
  selector: 'app-todo_list-entry',
  template: `
    <app-to-do-list></app-to-do-list>
  `,
})
export class RemoteEntry { }
