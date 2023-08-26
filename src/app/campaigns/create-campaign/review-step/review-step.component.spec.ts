import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewStepComponent } from './review-step.component';

describe('ReviewStepComponent', () => {
  let component: ReviewStepComponent;
  let fixture: ComponentFixture<ReviewStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewStepComponent]
    });
    fixture = TestBed.createComponent(ReviewStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
