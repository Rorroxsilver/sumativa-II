import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/service/Task.service';
import { TaskInterfce } from 'src/app/taskInterface.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent  implements OnInit {

  task: TaskInterfce = { id: null, title: '', description: '', dueDate: '', completed: false };
  isEditing = false;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.task = this.taskService.getTask(+id);
    }
  }

  saveTask() {
    if (this.isEditing) {
      this.taskService.updateTask(this.task);
    } else {
      this.taskService.addTask(this.task);
    }
    this.router.navigate(['/tabs/tab1']);
  }

}
