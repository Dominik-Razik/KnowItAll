import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Dialog } from '@capacitor/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge, IonButton, IonButtons, IonBackButton]
})
export class ProfilePage {
  userName: string = 'User';
  totalCorrect: number = 0;
  totalIncorrect: number = 0;
  generalTriviaCorrect: number = 0;
  generalTriviaIncorrect: number = 0;
  vehicleTriviaCorrect: number = 0;
  vehicleTriviaIncorrect: number = 0;
  gamingTriviaCorrect: number = 0;
  gamingTriviaIncorrect: number = 0;

  constructor(private storage: Storage) { }

  async ionViewWillEnter() {
    await this.storage.create();
    await this.loadData();
  }

  async loadData() {
    let storedName = await this.storage.get('user_name');
    if (storedName) {
      this.userName = storedName;
    }

    let tc = await this.storage.get('total_correct');
    if (tc) {
      this.totalCorrect = tc;
    }
    if (!tc) {
      this.totalCorrect = 0;
    }

    let ti = await this.storage.get('total_incorrect');
    if (ti) {
      this.totalIncorrect = ti;
    }
    if (!ti) {
      this.totalIncorrect = 0;
    }

    let gtc = await this.storage.get('general_trivia_correct');
    if (gtc) {
      this.generalTriviaCorrect = gtc;
    }
    if (!gtc) {
      this.generalTriviaCorrect = 0;
    }

    let gti = await this.storage.get('general_trivia_incorrect');
    if (gti) {
      this.generalTriviaIncorrect = gti;
    }
    if (!gti) {
      this.generalTriviaIncorrect = 0;
    }

    let vtc = await this.storage.get('vehicle_trivia_correct');
    if (vtc) {
      this.vehicleTriviaCorrect = vtc;
    }
    if (!vtc) {
      this.vehicleTriviaCorrect = 0;
    }

    let vti = await this.storage.get('vehicle_trivia_incorrect');
    if (vti) {
      this.vehicleTriviaIncorrect = vti;
    }
    if (!vti) {
      this.vehicleTriviaIncorrect = 0;
    }

    let gametc = await this.storage.get('gaming_trivia_correct');
    if (gametc) {
      this.gamingTriviaCorrect = gametc;
    }
    if (!gametc) {
      this.gamingTriviaCorrect = 0;
    }

    let gameti = await this.storage.get('gaming_trivia_incorrect');
    if (gameti) {
      this.gamingTriviaIncorrect = gameti;
    }
    if (!gameti) {
      this.gamingTriviaIncorrect = 0;
    }
  }

  async editName() {
    const { value } = await Dialog.prompt({
      title: 'Edit Username',
      message: 'Enter your new username',
      inputText: this.userName
    });

    if (value) {
      this.userName = value;
      await this.storage.set('user_name', this.userName);
    }
  }
}
