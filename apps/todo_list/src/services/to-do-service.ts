import { Injectable } from '@angular/core';
import { ToDoItem } from './to-do-item';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private todosSubject = new BehaviorSubject<ToDoItem[]>([
    {
      id: 1,
      title: 'Design login screen',
      description: 'Create responsive layout using Bootstrap grid',
      isDone: false
    },
    {
      id: 2,
      title: 'Fix validation bug',
      description: 'Email field does not validate correctly',
      isDone: false
    },
    {
      id: 3,
      title: 'Prepare UI review',
      description: 'Gather feedback from product team',
      isDone: false
    },
    {
      id: 4,
      title: 'Refactor components',
      description: 'Simplify reusable UI components',
      isDone: false
    }
  ]);

  /** Observable for UI binding */
  getTodos(): Observable<ToDoItem[]> {
    return this.todosSubject.asObservable();
  }

  /** Add new ToDo item */
  addTodo(todo: Omit<ToDoItem, 'id'>): void {
    const currentTodos = this.todosSubject.value;
    const newTodo: ToDoItem = {
      ...todo,
      id: this.generateId()
    };

    this.todosSubject.next([...currentTodos, newTodo]);
  }

  /** Mark ToDo as Done / Undone */
  toggleTodoStatus(id: number): void {
    const updatedTodos = this.todosSubject.value.map(todo =>
      todo.id === id
        ? { ...todo, isDone: !todo.isDone }
        : todo
    );

    this.todosSubject.next(updatedTodos);
  }

  /** Remove ToDo by id */
  removeTodo(id: number): void {
    const updatedTodos = this.todosSubject.value.filter(
      todo => todo.id !== id
    );

    this.todosSubject.next(updatedTodos);
  }

  /** Simple id generator */
  private generateId(): number {
    return this.todosSubject.value.length
      ? Math.max(...this.todosSubject.value.map(t => t.id)) + 1
      : 1;
  }


}
