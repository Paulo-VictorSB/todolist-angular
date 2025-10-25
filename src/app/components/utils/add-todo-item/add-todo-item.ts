import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo-item',
  imports: [FormsModule],
  templateUrl: './add-todo-item.html',
  styleUrl: './add-todo-item.css',
})
export class AddTodoItem {
  public task_name: string = "";
  public status: number = 0;

  @Output() taskAdded = new EventEmitter<void>();

  public addItem(event: Event) {
    event.preventDefault();

    if (!this.task_name.trim()) {
      alert("Digite uma tarefa antes de adicionar!");
      return;
    }

    const task = { task_name: this.task_name.trim(), status: this.status };

    const storedTasks = localStorage.getItem('items');
    const tasks: any[] = storedTasks ? JSON.parse(storedTasks) : [];

    tasks.push(task);

    localStorage.setItem('items', JSON.stringify(tasks));
    this.task_name = "";
    this.status = 0;
    this.taskAdded.emit();
  }
}
