import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //NgModel directive
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentsComponent } from './students.component';
import { DashboardComponent } from './dashboard.component';
import { StudentService } from './student.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentDetailComponent,
    StudentsComponent,
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
