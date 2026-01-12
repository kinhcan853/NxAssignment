import { Component } from '@angular/core';
import { NxWelcome } from './nx-welcome';
import { TodoProgress } from '../../components/todo_progress';

@Component({
  imports: [NxWelcome, TodoProgress],
  selector: 'app-statistic-entry',
  template: `<app-todo-progress></app-todo-progress>`,
})
export class RemoteEntry {}
