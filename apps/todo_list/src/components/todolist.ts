import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.scss',
})
export class ToDoList {
  todos = [
    {
      title: 'Design login screen',
      description: 'Create responsive layout using Bootstrap grid'
    },
    {
      title: 'Fix validation bug',
      description: 'Email field does not validate correctly'
    },
    {
      title: 'Prepare UI review',
      description: 'Gather feedback from product team'
    },
    {
      title: 'Refactor components',
      description: 'Simplify reusable UI components'
    }
  ];

  selectAll() {
    // Implementation for selecting all items
  }

  markDone() {
    // Implementation for marking selected items as done
  }

  markUndone() {
    // Implementation for marking selected items as undone
  }

  removeSelected() {
    // Implementation for removing selected items
  }

  addItem() {
    // Implementation for adding a new item
  }
}
