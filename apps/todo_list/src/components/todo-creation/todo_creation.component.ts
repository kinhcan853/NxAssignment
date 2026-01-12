import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToDoService } from '@org/todo_service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-creation',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo_creation.component.html',
  styleUrl: './todo_creation.component.scss',
})
export class ToDoCreation {
  title: string = '';
  description: string = '';

  constructor(
    private router: Router,
    private todoService: ToDoService){
  }

  addToDo(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.todoService.addTodo({
      title: this.title,
      description: this.description,
      isDone: false
    });

    this.router.navigate(['']);
  }

  cancel(): void {
    this.router.navigate(['']);
  }
}
