import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineSidebarComponent } from './airline-sidebar.component';

describe('AirlineSidebarComponent', () => {
  let component: AirlineSidebarComponent;
  let fixture: ComponentFixture<AirlineSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirlineSidebarComponent]
    });
    fixture = TestBed.createComponent(AirlineSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
