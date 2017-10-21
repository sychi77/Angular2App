import { Component } from '@angular/core';

export class Student {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '<h1>{{title}}</h1><h2>{{student.name}} details!</h2>',
})
export class AppComponent {
  title = 'Directory of Students';
  student: Student = {
    id: 1,
    name: 'Steve'
  };
}
