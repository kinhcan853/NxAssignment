import { Component } from '@angular/core';
import { ToDoCreation } from '../../components/todo_creation.component';

@Component({
  imports: [ToDoCreation],
  selector: 'app-todo_creation-entry',
  template: `<app-to-do-creation></app-to-do-creation>`,
})
export class RemoteEntry {}
