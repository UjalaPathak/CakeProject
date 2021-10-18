import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercakeComponent } from './ordercake.component';

describe('OrdercakeComponent', () => {
  let component: OrdercakeComponent;
  let fixture: ComponentFixture<OrdercakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdercakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdercakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
