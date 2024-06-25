import { Component } from '@angular/core';
import { ServicioPost } from '../service/Http.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  datos: any;

  constructor(private service: ServicioPost) {
    this.mostrarTask()
  }
  mostrarTask() {
    this.service.mostrarUser().subscribe((e) => {
      this.datos = e;
    });
  }

}
