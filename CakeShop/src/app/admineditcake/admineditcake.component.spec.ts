import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcakeComponent } from './admineditcake.component';

describe('AdmineditcakeComponent', () => {
  let component: AdmineditcakeComponent;
  let fixture: ComponentFixture<AdmineditcakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditcakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
