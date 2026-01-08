import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAdd } from './booking-add';

describe('BookingAdd', () => {
  let component: BookingAdd;
  let fixture: ComponentFixture<BookingAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
