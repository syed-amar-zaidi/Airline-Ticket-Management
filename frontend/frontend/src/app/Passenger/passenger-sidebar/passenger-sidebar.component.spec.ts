import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerSidebarComponent } from './passenger-sidebar.component';

describe('PassengerSidebarComponent', () => {
  let component: PassengerSidebarComponent;
  let fixture: ComponentFixture<PassengerSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerSidebarComponent]
    });
    fixture = TestBed.createComponent(PassengerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
