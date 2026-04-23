import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamingTriviaPage } from './gaming-trivia.page';

describe('GamingTriviaPage', () => {
  let component: GamingTriviaPage;
  let fixture: ComponentFixture<GamingTriviaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingTriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
