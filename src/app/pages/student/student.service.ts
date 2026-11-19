import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Student {
  id: number;
  name: string;
  gender: string;
  phone: string;
}

export type StudentView = Student;
@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private http = inject(HttpClient);

  get url():string{
    return 'http://localhost:5223'
  }

  getAll(): Observable<StudentView[]>{
    return this.http.get<StudentView[]>(
      `${this.url}/Student`,
      {
        headers: new HttpHeaders()
          .append('Content-Type', 'application/json')
      }
    )
  }
}
