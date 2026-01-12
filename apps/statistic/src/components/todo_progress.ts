import { Component, OnInit } from '@angular/core';
import { loadRemoteModule } from '@nx/angular/mf';

@Component({
  selector: 'app-todo-progress',
  imports: [],
  templateUrl: './todo_progress.html',
  styleUrl: './todo_progress.scss',
})
export class TodoProgress implements OnInit {
  
  constructor() {

    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async getRemoteUserService() {
    const { ToDoService } = await loadRemoteModule('todo_list', './Service');

    const service = new ToDoService();
    console.log(service.getTodos());
  }
}
