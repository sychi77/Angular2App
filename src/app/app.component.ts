import { Component } from '@angular/core';

export class Student {
  id: number;
  name: string;
  grade: number;
}
const STUDENTS: Student[] = [
  { id: 11, name: 'Moe Nice', grade: 5 },
  { id: 12, name: 'Nars Co', grade: 5 },
  { id: 13, name: 'Bomb Asto', grade: 5 },
  { id: 14, name: 'Cele Ritas', grade: 5 },
  { id: 15, name: 'Mag Neta', grade: 5 },
  { id: 16, name: 'Rubber Man', grade: 5 },
  { id: 17, name: 'Dyn Ama', grade: 5 },
  { id: 18, name: 'Dre IQ', grade: 5 },
  { id: 19, name: 'Mag Ma', grade: 5 },
  { id: 20, name: 'Tor Nado', grade: 5 }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Directory of Students';
  students = STUDENTS;
  selectedStudent: Student;
  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
}
