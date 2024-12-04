import {Component, SkipSelf} from '@angular/core';
import {CoursesService} from "../services/courses.service";


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
   providers : [
     CoursesService
   ],

})
export class CardComponent {
  constructor(@SkipSelf() private coursesService: CoursesService) {
    console.log("we are just ");
  }

  // In case using USefactoy one
  // constructor(@Inject(COURSE_SERVICE) private coursesService:CoursesService) {
  //   console.log("we are just ");
  // }

}
