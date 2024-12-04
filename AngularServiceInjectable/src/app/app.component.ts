import {Component, Inject, InjectionToken} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CoursesService} from "./services/courses.service";
import {CardComponent} from "./card/card.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";

//THE FACTORY FONCTION FOR CREATIION SERICE
function ServiceProvider(http:HttpClient):CoursesService{
  return new CoursesService(http);
}
//we have to defini tooken for ur procide unique nqme
export const COURSE_SERVICE=new InjectionToken<CoursesService>("COURSE-SERVICE");


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[
    {
      provide:COURSE_SERVICE,
      useFactory : ServiceProvider,
      deps : [HttpClient]
    }
  ]
})
export class AppComponent {
  title = 'AngularServiceInjectable';

  constructor(@Inject(COURSE_SERVICE) private coursesService:CoursesService) {
  }
}
