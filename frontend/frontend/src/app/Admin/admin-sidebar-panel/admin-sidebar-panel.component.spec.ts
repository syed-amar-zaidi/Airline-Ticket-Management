import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidebarPanelComponent } from './admin-sidebar-panel.component';

describe('AdminSidebarPanelComponent', () => {
  let component: AdminSidebarPanelComponent;
  let fixture: ComponentFixture<AdminSidebarPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSidebarPanelComponent]
    });
    fixture = TestBed.createComponent(AdminSidebarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
