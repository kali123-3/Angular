import {Component, Input, TemplateRef} from '@angular/core';
import {CommonModule, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-test-template',
  standalone: true,
  imports: [
    NgTemplateOutlet,
  ],
  templateUrl: './test-template.component.html',
  styleUrl: './test-template.component.css'
})
export class TestTemplateComponent {

  @Input()
  imageTemplate! : TemplateRef<any>;

  constructor() {
  }


}
