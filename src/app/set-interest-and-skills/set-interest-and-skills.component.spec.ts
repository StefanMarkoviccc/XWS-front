import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInterestAndSkillsComponent } from './set-interest-and-skills.component';

describe('SetInterestAndSkillsComponent', () => {
  let component: SetInterestAndSkillsComponent;
  let fixture: ComponentFixture<SetInterestAndSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetInterestAndSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInterestAndSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
