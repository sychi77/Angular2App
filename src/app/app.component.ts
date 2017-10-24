import { Component, OnInit } from '@angular/core';

import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent implements OnInit{
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