import { Injectable } from '@angular/core';
import { TaskInterfce } from '../taskInterface.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioPost {
  constructor(private httpService: HttpClient) {}

  guardarPost(request: TaskInterfce): Observable<TaskInterfce> {

    const endpoint = 'https://jsonplaceholder.typicode.com/posts';
    console.log(this.httpService.post<TaskInterfce>(endpoint, request))
    return this.httpService.post<TaskInterfce>(endpoint, request);
  }

  mostrarPost(): Observable<TaskInterfce>{
    const endpoint = 'https://jsonplaceholder.typicode.com/posts';
    return this.httpService.get<TaskInterfce>(endpoint)
  }

  
  mostrarUser(): Observable<any> {
    const endpoint = 'https://jsonplaceholder.typicode.com/users';
    return this.httpService.get<any>(endpoint);
  }

}
