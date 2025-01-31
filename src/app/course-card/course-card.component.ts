import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: false,
})
export class CourseCardComponent implements OnInit{

    @Input({required: true})
    course:Course;

    @Input({required: true})
    index:number;

    // @Output('courseSelected')
    @Output('courseSelected') 
    courseEmiitter = new EventEmitter<Course>();

    constructor(){}

    ngOnInit(){        
    }

    onCourseViewed(){
        console.log("card component - button clicked ...");
        this.courseEmiitter.emit(this.course);
    }

    getCardClass(curr_course:Course){
      let cardClass:String = '';

      switch (curr_course.category) {
        case "BEGINNER":
          cardClass = 'beginner';
          break
        case "INTERMEDIATE":
          cardClass = 'intermediate';
          break
        case "ADVANCED":
          cardClass = 'advanced';
          break
        default:
          cardClass = 'intermediate';
      }

      return cardClass;
    }
}
