import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'my-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentService]
})
export class StudentsComponent implements OnInit{
  students : Student[];
  selectedStudent: Student;

  constructor(
    private router: Router,
    private studentService: StudentService) { }  

  getStudents(): void {
    this.studentService.getStudents().then(students => this.students = students);
  }
  ngOnInit(): void {
    this.getStudents();
  }
  onSelect(student: Student): void {
    this.selectedStudent = student;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedStudent.id]);
  }
}