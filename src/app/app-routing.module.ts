import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1/tab1.page';
import { TaskComponent } from './task/task.component';
import { TaskFormComponent } from './task/task-form/task-form.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
   

  },
  { path: 'task', component: TaskComponent ,
  loadChildren: () => import('./task/task.module').then(m => m.TaskModule),


  },
  { path: 'task/edit/:id', component: TaskFormComponent ,
  loadChildren: () => import('./task/task.module').then(m => m.TaskModule),


  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
