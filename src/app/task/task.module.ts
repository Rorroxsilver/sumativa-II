import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TaskFormComponent } from './task-form/task-form.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [TaskComponent,TaskFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class TaskModule { }
