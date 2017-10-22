import { Component, Input } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'student-detail',
  template: `
  <div *ngIf="student">
  <h2>{{student.name}} Details!</h2>
  <div>
    <label>Id: </label>{{student.id}}
  </div>
  <div>
    <label>Name: </label>
    <input [(ngModel)]="student.name" placeholder = "name">
  </div>
  <div>
    <label>Grade: </label>{{student.grade}}
  </div>
  </div>
  `
})
export class StudentDetailComponent {
    @Input() student: Student;
}