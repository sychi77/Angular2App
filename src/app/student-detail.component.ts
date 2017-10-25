import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { StudentService } from './student.service';
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
export class StudentDetailComponent implements OnInit{
    @Input() student: Student;
    constructor(
      private studentService: StudentService,
      private route: ActivatedRoute,
      private location: Location
    ) {};
    ngOnInit(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.studentService.getStudent(+params.get('id')))
        .subscribe(student => this.student = student);
    }
}