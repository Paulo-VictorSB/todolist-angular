import { Component } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item';
import { AddTodoItem } from '../../utils/add-todo-item/add-todo-item';

@Component({
  selector: 'app-card-component',
  imports: [TodoItem, AddTodoItem],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent {
  public tasks: any[] = [];

  constructor() {
    const storedTasks = localStorage.getItem('items');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  public loadTasks() {
    const storedTasks = localStorage.getItem('items');
    this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
  }

}
