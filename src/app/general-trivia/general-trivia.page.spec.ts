import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralTriviaPage } from './general-trivia.page';

describe('GeneralTriviaPage', () => {
  let component: GeneralTriviaPage;
  let fixture: ComponentFixture<GeneralTriviaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
