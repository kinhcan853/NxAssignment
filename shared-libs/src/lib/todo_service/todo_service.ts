import { Injectable } from '@angular/core';
import { ToDoEvent, ToDoItem } from './to-do-item';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Singleton service
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

  private todoEventSubject = new Subject<ToDoEvent>();
  readonly todoEvents$ = this.todoEventSubject.asObservable();

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

    this.todoEventSubject.next({
      type: 'add',
      todo: newTodo
    });
  }

  /** Mark ToDo as Done / Undone */
  toggleTodoStatus(id: number): void {
    let changedTodo!: ToDoItem;

    const updatedTodos = this.todosSubject.value.map(todo => {
      if (todo.id === id) {
        changedTodo = { ...todo, isDone: !todo.isDone };
        return changedTodo;
      }
      return todo;
    });

    this.todosSubject.next(updatedTodos);

    this.todoEventSubject.next({
      type: changedTodo.isDone ? 'disable' : 'enable',
      todo: changedTodo
    });
  }

  /** Remove ToDo by id */
  removeTodo(id: number): void {
    const removedTodo = this.todosSubject.value.find(t => t.id === id);
    if (!removedTodo) return;

    const updatedTodos = this.todosSubject.value.filter(
      todo => todo.id !== id
    );

    this.todosSubject.next(updatedTodos);

    this.todoEventSubject.next({
      type: 'remove',
      todo: removedTodo
    });
  }

  /** Simple id generator */
  private generateId(): number {
    return this.todosSubject.value.length
      ? Math.max(...this.todosSubject.value.map(t => t.id)) + 1
      : 1;
  }


}
