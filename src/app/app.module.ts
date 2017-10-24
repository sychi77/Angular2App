import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //NgModel directive
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentsComponent }     from './students.component';
import { DashboardComponent } from './dashboard.component';
import { StudentService }         from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentDetailComponent,
    StudentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, //binds [(ngModel)]
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'students',
        component: StudentsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
