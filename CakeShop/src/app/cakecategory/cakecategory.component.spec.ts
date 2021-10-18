import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakecategoryComponent } from './cakecategory.component';

describe('CakecategoryComponent', () => {
  let component: CakecategoryComponent;
  let fixture: ComponentFixture<CakecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakecategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
