import { CommonModule } from '@angular/common';
import { Component, Input,EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.css'],
})
export class TodoItem {
  @Input() task_name!: string;
  @Input() status!: number;
  @Input() index!: number;
  public tasks: any[] = [];
  public isEditing: Boolean = false;

  @Output() taskModified = new EventEmitter<void>();

  constructor() {
    const storedTasks = localStorage.getItem('items');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  public edit() {
    this.status == 0 ?  this.isEditing = true : this.isEditing = false;
  }

  public confirmEdit() {
    this.isEditing = false;
    this.tasks[this.index].task_name = this.task_name;
    this.updateTaskOnLocalStorage();
  }

  public completed() {
    this.isEditing = false;
    this.tasks[this.index].status = 1;
    this.updateTaskOnLocalStorage();
  }

  public deleted() {
    this.isEditing = false;
    this.tasks.splice(this.index, 1);
    this.updateTaskOnLocalStorage();
  }

  private updateTaskOnLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.tasks));
    this.taskModified.emit();
  }
}
