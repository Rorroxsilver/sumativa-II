import { Injectable } from '@angular/core';
import { TaskInterfce } from '../taskInterface.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: TaskInterfce[] = [];
  private currentId = 1;

  constructor() {}

  getTasks() {
    return this.tasks;
  }

  getTask(id: number): any {
    return this.tasks.find((task) => task.id === id);
  }

  mostrarTask(){
    const item = localStorage.getItem('task');
    this.tasks = item ? JSON.parse(item) : null;
  }

 
  addTask(task: TaskInterfce): void {
    task.id = this.currentId++;
    this.tasks.push(task);
    localStorage.setItem('task', JSON.stringify(this.getTasks()));
  }

  updateTask(updatedTask: TaskInterfce): void {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  toggleTaskCompletion(id: number): void {
    const task = this.getTask(id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    // localStorage.setItem('task', JSON.stringify(this.tasks))
  }
}
