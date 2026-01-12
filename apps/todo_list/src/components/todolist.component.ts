import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToDoItem } from '../services/to-do-item';
import { Observable } from 'rxjs/internal/Observable';
import { ToDoService } from '../services/to-do-service';

@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class ToDoList {

  todos$: Observable<ToDoItem[]>;

  /** For new todo form */
  newTitle = '';
  newDescription = '';
  
  /**
   *
   */
  constructor(private todoService: ToDoService) {
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
    if (!this.newTitle.trim()) return;

    this.todoService.addTodo({
      title: this.newTitle,
      description: this.newDescription,
      isDone: false
    });

    this.newTitle = '';
    this.newDescription = '';
  }
}
