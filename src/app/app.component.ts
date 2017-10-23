import { Component } from '@angular/core';

import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentService]
})
export class AppComponent {
  title = 'Directory of Students';
  students = Student[];
  selectedStudent: Student;

  constructor(private studentService: StudentService) { }  

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
  getStudents(): void {
    this.students = this.studentService.getStudents();
  }
}