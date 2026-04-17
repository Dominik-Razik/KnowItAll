import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonBadge } from '@ionic/angular/standalone';
import { TriviaApi } from '../services/trivia-api';

@Component({
  selector: 'app-general-trivia',
  templateUrl: './general-trivia.page.html',
  styleUrls: ['./general-trivia.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonBadge]
})
export class GeneralTriviaPage {
  questions: any[] = [];
  currentIndex: number = 0;
  selectedAnswer: string = '';
  isCorrect: boolean = false;

  constructor(private triviaApi: TriviaApi) { }

  ionViewWillEnter() {
    this.triviaApi.getGeneralTrivia().subscribe((data: any) => {
      for (let i = 0; i < data.results.length; i++) {
        const q = data.results[i];
        const answers = [...q.incorrect_answers, q.correct_answer];
        q.answers = this.shuffle(answers);
        this.questions.push(q);
      }
    });
  }

  shuffle(arr: string[]) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  pickAnswer(answer: string) {
    if (this.selectedAnswer !== '') {
      return;
    }

    this.selectedAnswer = answer;

    if (answer === this.questions[this.currentIndex].correct_answer) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }

    setTimeout(() => {
      this.currentIndex = this.currentIndex + 1;
      this.selectedAnswer = '';
      this.isCorrect = false;
    }, 1500);
  }

  getButtonColor(answer: string) {
    if (this.selectedAnswer === '') {
      return 'primary';
    }

    if (answer === this.questions[this.currentIndex].correct_answer) {
      return 'success';
    }

    if (answer === this.selectedAnswer) {
      return 'danger';
    }

    return 'primary';
  }
}
