import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTemplateComponent } from './test-template.component';

describe('TestTemplateComponent', () => {
  let component: TestTemplateComponent;
  let fixture: ComponentFixture<TestTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
