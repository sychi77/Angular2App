import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Student } from './student';

@Injectable()
export class StudentService {
    private studentsUrl = 'api/students';  // URL to web api
    
   constructor(private http: Http) { }
    
   getStudents(): Promise<Student[]> {
     return this.http.get(this.studentsUrl)
                .toPromise()
                .then(response => response.json().data as Student[])
                .catch(this.handleError);
   }
    
   private handleError(error: any): Promise<any> {
     console.error('An error occurred', error); // for demo purposes only
     return Promise.reject(error.message || error);
   }
    getStudent(id: number): Promise<Student> {
        return this.getStudents()
                   .then(students => students.find(student => student.id === id));
    }
}