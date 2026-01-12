import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToDoItem } from '../../../../../shared-libs/src/lib/todo_service/to-do-item';
import { Observable } from 'rxjs/internal/Observable';
import { ToDoService } from '../../../../../shared-libs/src/lib/todo_service/todo_service';
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
    private router: Router){
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
