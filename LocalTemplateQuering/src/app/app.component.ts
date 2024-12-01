import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CourseCardComponent} from "./course-card/course-card.component";
import {ProjectionContentComponent} from "./projection-content/projection-content.component";
import {CommonModule, NgTemplateOutlet} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {TestComponentRenderer} from "@angular/core/testing";
import {TestTemplateComponent} from "./test-template/test-template.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, CourseCardComponent, ProjectionContentComponent, TestTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'LocalTemplateQuering';

  // @ViewChildren('card1, card2')
  // children!: QueryList<ElementRef>;
  //
  //
  // @ViewChild('cardRef', {static: false})
  // card: ElementRef | undefined;
  @ViewChild('blanckImage') input: ElementRef | undefined;


  constructor() {
    //console.log("La valeur dans le constructeur ", this.card);
  }

  ngOnInit(): void {
    //console.log("La valeur dans ngOnit ", this.card);
  }

  ngAfterViewInit(): void {
    //console.log("La valeur dans ngAfterViewInit ", this.card);
  }

  /*

   */

}
