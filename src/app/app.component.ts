import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {

  courses = COURSES;

  startDate = new Date(2025,0,1);
  header = 'Angular Courses'
  price = 99.99

  onCourseSelected(course: Course) {
    console.log("App component - click event bubbled...", course);        
  }
}
