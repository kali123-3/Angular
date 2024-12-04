import {Component, Inject, Injectable, InjectionToken} from '@angular/core';
import {CoursesService} from "../services/courses.service";
import {HttpClient} from "@angular/common/http";
import {COURSE_SERVICE} from "../app.component";


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',

})
export class CardComponent {
  constructor(@Inject(COURSE_SERVICE) private coursesService:CoursesService) {
    console.log("we are just ");
  }

}
