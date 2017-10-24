import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //NgModel directive

import { AppComponent } from './app.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentsComponent }     from './students.component';
import { StudentService }         from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //binds [(ngModel)]
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
