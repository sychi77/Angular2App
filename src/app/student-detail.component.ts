import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { StudentService } from './student.service';
import { Student } from './student';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'] 
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
    goBack(): void {
      this.location.back();
    }
    save(): void {
      this.studentService.update(this.student)
        .then(() => this.goBack());
    }
}