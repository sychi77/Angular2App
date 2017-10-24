import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <my-students></my-students>
  `
})
export class AppComponent {
  title = 'Students Directory';
}