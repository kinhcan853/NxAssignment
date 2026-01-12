import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do-creation',
  imports: [FormsModule],
  templateUrl: './todo_creation.component.html',
  styleUrl: './todo_creation.component.scss',
})
export class ToDoCreation {
  title: string = '';
  description: string = '';

  addToDo(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    // Simulate success action
    console.log('Todo added:', {
      title: this.title,
      description: this.description
    });

    // Reset form and button state
    form.resetForm();
  }
}
