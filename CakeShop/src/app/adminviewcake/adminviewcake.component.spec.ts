import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewcakeComponent } from './adminviewcake.component';

describe('AdminviewcakeComponent', () => {
  let component: AdminviewcakeComponent;
  let fixture: ComponentFixture<AdminviewcakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewcakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
