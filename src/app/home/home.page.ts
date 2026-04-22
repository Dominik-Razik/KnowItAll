import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRouterLink, IonMenu, IonButtons, IonMenuButton, IonIcon, IonButton, IonItem, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { RouterLinkWithHref } from "@angular/router";
import { Storage } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';
import { TriviaApi } from '../services/trivia-api';
import { addIcons } from 'ionicons';
import { person } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRouterLink, RouterLinkWithHref, IonMenu, IonButtons, IonMenuButton, IonIcon, IonButton, IonItem, IonSelect, IonSelectOption, FormsModule],
})
export class HomePage {
  username: string = 'User';
  selectedDifficulty: string = 'medium';

  constructor(private storage: Storage, public triviaApi: TriviaApi) {
    addIcons({ person });
  }

  async onDifficultyChange(value: string) {
    this.selectedDifficulty = value;
    this.triviaApi.difficulty = value;
    await this.storage.set('difficulty', value);
  }

  async ionViewWillEnter() {
    await this.storage.create();

    const storedDifficulty = await this.storage.get('difficulty');
    if (storedDifficulty != null) {
      this.selectedDifficulty = storedDifficulty;
      this.triviaApi.difficulty = storedDifficulty;
    }

    let storedName = await this.storage.get('user_name');
    if (storedName) {
      this.username = storedName;
    }
  }
}
