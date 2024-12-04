import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable(
  {
    providedIn : 'root',
    useFactory :(http:HttpClient) => new CoursesService(http),
    deps : [HttpClient]
  }
)
export class CoursesService {

  constructor(private http:HttpClient) {

  }
}
