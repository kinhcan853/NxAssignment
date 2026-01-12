import { Component } from '@angular/core';
import { ToDoService } from '@shared_libs/todo_service';
import { ToastService } from './todo_notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-notification',
  imports: [CommonModule],
  templateUrl: './todo_notification.html',
  styleUrl: './todo_notification.scss',
})
export class TodoNotification {
  constructor(
    private todoService: ToDoService,
    public toastService: ToastService
  ) {
    this.todoService.todoEvents$.subscribe(event => {
      switch (event.type) {
        case 'add':
          this.toastService.show('Todo added', 'success');
          break;

        case 'enable':
          this.toastService.show('Todo enabled', 'info');
          break;

        case 'disable':
          this.toastService.show('Todo disabled', 'info');
          break;

        case 'remove':
          this.toastService.show('Todo removed', 'danger');
          break;
      }
    });
  }
}
