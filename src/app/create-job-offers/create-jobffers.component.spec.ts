import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobffersComponent } from './create-jobffers.component';

describe('CreateJobffersComponent', () => {
  let component: CreateJobffersComponent;
  let fixture: ComponentFixture<CreateJobffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJobffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJobffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
