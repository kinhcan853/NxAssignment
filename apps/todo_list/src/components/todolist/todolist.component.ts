import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ToDoService, ToDoItem } from '@shared_libs/todo_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class ToDoList {

  todos$: Observable<ToDoItem[]>;

  constructor(
    private todoService: ToDoService,
    private router: Router) {
    this.todos$ = this.todoService.getTodos();
  }

  toggleTodoStatus(id: number) {
    // Implementation for marking selected items as undone
    this.todoService.toggleTodoStatus(id);
  }

  removeItem(id: number): void {
    this.todoService.removeTodo(id);
  }

  addItem() {
    this.router.navigate(['create']);
  }
}
