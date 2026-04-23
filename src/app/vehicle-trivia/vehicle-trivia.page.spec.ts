import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleTriviaPage } from './vehicle-trivia.page';

describe('VehicleTriviaPage', () => {
  let component: VehicleTriviaPage;
  let fixture: ComponentFixture<VehicleTriviaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
