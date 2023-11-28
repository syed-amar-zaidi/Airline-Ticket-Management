import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerSidebarPanelComponent } from './passenger-sidebar-panel.component';

describe('PassengerSidebarPanelComponent', () => {
  let component: PassengerSidebarPanelComponent;
  let fixture: ComponentFixture<PassengerSidebarPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerSidebarPanelComponent]
    });
    fixture = TestBed.createComponent(PassengerSidebarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
