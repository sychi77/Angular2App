import { Component, OnInit } from '@angular/core';

import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'my-students',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class StudentsComponent implements OnInit{
  title = 'Directory of Students';
  students : Student[];
  selectedStudent: Student;

  constructor(private studentService: StudentService) { }  

  getStudents(): void {
    this.studentService.getStudents().then(students => this.students = students);
  }
  ngOnInit(): void {
    this.getStudents();
  }
  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

}