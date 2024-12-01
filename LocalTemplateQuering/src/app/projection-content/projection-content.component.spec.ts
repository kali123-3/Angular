import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionContentComponent } from './projection-content.component';

describe('ProjectionContentComponent', () => {
  let component: ProjectionContentComponent;
  let fixture: ComponentFixture<ProjectionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectionContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
