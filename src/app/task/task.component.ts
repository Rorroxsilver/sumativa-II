import { Component, OnInit } from '@angular/core';
import { TaskInterfce } from '../taskInterface.interface';
import { TaskService } from '../service/Task.service';
import { NavController } from '@ionic/angular';
import {  ServicioPost } from '../service/Http.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  task: TaskInterfce = {
    id: 0,
    title: '',
    description: '',
    dueDate: new Date(),
    completed: false,
  };

  constructor(
    private taskService: TaskService,
    private navCtrl: NavController,
    private s: ServicioPost
  ) {
    this.mostrarTask()
  }

  saveTask() {
    if (this.task.id === 0) {
      this.taskService.addTask(this.task);
    } else {
      this.taskService.updateTask(this.task);
    }
    this.navCtrl.back();

    this.guardarTask(this.task)
    
  }

  guardarTask(request:TaskInterfce) {
    console.log(request)
    this.s.guardarPost(request);
  }
  mostrarTask(){
    // this.s.mostrarPost().subscribe(
    //   e => console.log(e)
    // )
  }
}
