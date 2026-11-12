import {Component, inject, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';

export interface Student {
  name: string
  gender: string
  phone: string
  id: number
}

export type StudentListModel = Student;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  http = inject(HttpClient);
  data = signal<StudentListModel[]>([]);

  constructor() {

  }

  ngOnChanges(changes: any) {

  }

  ngAfterViewInit() {

  }

  ngOnCheck() {

  }

  ngOnDestroy() {

  }

  ngOnInit() {
      this.http.get("http://localhost:5223/Student",)
        .subscribe({
          next: (result: any)=> {
            console.log(result)
          },
          error: (e: any) => {
            console.log(e)
          },
          complete: ()=> {

          }
        })

    // fetch("http://localhost:5223/Student")
    //   .then(res => {
    //     console.log(res.json())
    //   })
    //   .then((data: any) => {
    //     console.log(data)
    //   })
    // .catch(e => {
    //   console.error(e);
    // })
  }
}
