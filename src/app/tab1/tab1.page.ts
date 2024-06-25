import { Component } from '@angular/core';
import { TaskService } from '../service/Task.service';
import { TaskInterfce } from '../taskInterface.interface';
import { Router } from '@angular/router';
import { ServicioPost } from '../service/Http.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  tasks: TaskInterfce[];

  constructor(
    private taskService: TaskService,
    private router: Router,

    private s: ServicioPost
  ) {

    this.tasks = this.taskService.getTasks();
    this.mostrarTask()
  }

  markAsCompleted(task: TaskInterfce) {
    task.completed = true;
    this.taskService.updateTask(task);
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks();
  }
  editTask(id: number) {
    this.router.navigate([`/task/edit/${id}`]);
  }

  mostrarTask() {
    this.s.mostrarPost().subscribe((e) => console.log(e));
  }
}
