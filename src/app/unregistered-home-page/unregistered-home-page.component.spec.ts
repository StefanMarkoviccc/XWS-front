import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredHomePageComponent } from './unregistered-home-page.component';

describe('UnregisteredHomePageComponent', () => {
  let component: UnregisteredHomePageComponent;
  let fixture: ComponentFixture<UnregisteredHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnregisteredHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisteredHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
