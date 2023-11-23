import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineDashboardComponent } from './airline-dashboard.component';

describe('AirlineDashboardComponent', () => {
  let component: AirlineDashboardComponent;
  let fixture: ComponentFixture<AirlineDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirlineDashboardComponent]
    });
    fixture = TestBed.createComponent(AirlineDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
