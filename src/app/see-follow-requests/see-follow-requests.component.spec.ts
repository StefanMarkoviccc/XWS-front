import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeFollowRequestsComponent } from './see-follow-requests.component';

describe('SeeFollowRequestsComponent', () => {
  let component: SeeFollowRequestsComponent;
  let fixture: ComponentFixture<SeeFollowRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeFollowRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeFollowRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
