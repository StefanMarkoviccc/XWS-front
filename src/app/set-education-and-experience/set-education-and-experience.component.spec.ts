import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEducationAndExperienceComponent } from './set-education-and-experience.component';

describe('SetEducationAndExperienceComponent', () => {
  let component: SetEducationAndExperienceComponent;
  let fixture: ComponentFixture<SetEducationAndExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetEducationAndExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetEducationAndExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
