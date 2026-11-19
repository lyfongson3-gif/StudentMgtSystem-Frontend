import {Component, inject, OnInit, signal} from "@angular/core";
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import {Student, StudentService, StudentView} from './student.service';
import {NzTypographyModule} from 'ng-zorro-antd/typography';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-student',
  imports: [NzDividerModule, NzTableModule, NzTypographyModule],
  template: `
    <h1>Student Page</h1>
    <nz-table
      #basicTable
      [nzData]="data"
      [nzLoading]="loading()"
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        @for (data of basicTable.data; track data; let i = $index) {
          <tr>
            <td>{{ i + 1 }}</td>
            <td>{{ data.name }}</td>
            <td>{{ data.gender }}</td>
            <td>{{ data.phone }}</td>
            <td>
              <a>Edit 一 {{ data.name }}</a>
              <nz-divider nzType="vertical" />
              <a nz-typography nzType="danger">Delete</a>
            </td>
          </tr>
        }
      </tbody>
    </nz-table>
  `,
  styles: ['']

})
export class StudentComponent implements OnInit {
  private service = inject(StudentService);
  data: StudentView[] = [];
  loading = signal<boolean>(false);

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.loading.set(true);
    this.service.getAll().subscribe({
      next: (result: StudentView[]) => {
        this.data = result
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        this.loading.set(false);
      }
    })
  }
}
