import { Component } from '@angular/core';

export class Student {
  id: number;
  name: string;
  grade: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <h2>{{student.name}} Details!</h2>
  <div><label>Id: </label>{{student.id}}</div>
  <div><label>Name: </label>{{student.name}}</div>
  <div><label>Grade: </label>{{student.grade}}</div>
  `,
})
export class AppComponent {
  title = 'Directory of Students';
  student: Student = {
    id: 1,
    name: 'Steve Jobs',
    grade: 5,
  };
}
