import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //NgModel directive
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentsComponent } from './students.component';
import { DashboardComponent } from './dashboard.component';
import { StudentService } from './student.service';
import { StudentSearchComponent } from './student-search.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentDetailComponent,
    StudentsComponent,
    StudentSearchComponent
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
