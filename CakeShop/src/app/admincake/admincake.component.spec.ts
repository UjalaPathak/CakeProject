import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincakeComponent } from './admincake.component';

describe('AdmincakeComponent', () => {
  let component: AdmincakeComponent;
  let fixture: ComponentFixture<AdmincakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
