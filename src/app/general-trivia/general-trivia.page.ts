import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonBadge, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { TriviaApi } from '../services/trivia-api';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-general-trivia',
  templateUrl: './general-trivia.page.html',
  styleUrls: ['./general-trivia.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonBadge, IonBackButton, IonButtons]
})
export class GeneralTriviaPage {
  questions: any[] = [];
  currentIndex: number = 0;
  selectedAnswer: string = '';
  isCorrect: boolean = false;

  constructor(private triviaApi: TriviaApi, private storage: Storage) { }

  async ionViewWillEnter() {
    await this.storage.create();

    this.questions = [];
    this.currentIndex = 0;

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

  async pickAnswer(answer: string) {
    if (this.selectedAnswer !== '') {
      return;
    }

    this.selectedAnswer = answer;

    if (answer === this.questions[this.currentIndex].correct_answer) {
      this.isCorrect = true;
      let generalTriviaCorrect = await this.storage.get('general_trivia_correct');
      if (!generalTriviaCorrect) { generalTriviaCorrect = 0; }
      await this.storage.set('general_trivia_correct', generalTriviaCorrect + 1);

      let totalCorrect = await this.storage.get('total_correct');
      if (!totalCorrect) { totalCorrect = 0; }
      await this.storage.set('total_correct', totalCorrect + 1);
    } else {
      this.isCorrect = false;
      let generalTriviaIncorrect = await this.storage.get('general_trivia_incorrect');
      if (!generalTriviaIncorrect) { generalTriviaIncorrect = 0; }
      await this.storage.set('general_trivia_incorrect', generalTriviaIncorrect + 1);

      let totalIncorrect = await this.storage.get('total_incorrect');
      if (!totalIncorrect) { totalIncorrect = 0; }
      await this.storage.set('total_incorrect', totalIncorrect + 1);
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
