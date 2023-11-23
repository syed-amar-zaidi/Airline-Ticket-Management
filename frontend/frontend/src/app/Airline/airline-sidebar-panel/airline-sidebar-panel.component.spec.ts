import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineSidebarPanelComponent } from './airline-sidebar-panel.component';

describe('AirlineSidebarPanelComponent', () => {
  let component: AirlineSidebarPanelComponent;
  let fixture: ComponentFixture<AirlineSidebarPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirlineSidebarPanelComponent]
    });
    fixture = TestBed.createComponent(AirlineSidebarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
