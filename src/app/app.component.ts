import { Component } from '@angular/core';

import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Directory of Students';
  students = Student[];
  selectedStudent: Student;
  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
}
