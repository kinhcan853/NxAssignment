import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ToDoService } from '@shared_libs/todo_service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProgressViewModel } from './todo_progress.model';

@Component({
  selector: 'app-todo-progress',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './todo_progress.html',
  styleUrl: './todo_progress.scss',
})
export class TodoProgress implements OnInit {

  progress$!: Observable<ProgressViewModel>;

  constructor(private todoService: ToDoService) {
  }

  ngOnInit(): void {
    this.progress$ = this.todoService.getTodos().pipe(
      map(todos => {
        const total = todos.length;
        const completed = todos.filter(t => t.isDone).length;
        const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

        return { total, completed, percent };
      })
    );
  }

}
