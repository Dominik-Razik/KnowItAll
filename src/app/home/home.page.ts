import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRouterLink, IonMenu, IonButtons, IonMenuButton, IonIcon, IonButton } from '@ionic/angular/standalone';
import { RouterLinkWithHref } from "@angular/router";
import { Storage } from '@ionic/storage-angular';
import { addIcons } from 'ionicons';
import { person } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRouterLink, RouterLinkWithHref, IonMenu, IonButtons, IonMenuButton, IonIcon, IonButton],
})
export class HomePage {
  username: string = 'User';

  constructor(private storage: Storage) {
    addIcons({ person });
  }

  async ionViewWillEnter() {
    await this.storage.create();
    let storedName = await this.storage.get('user_name');
    if (storedName) {
      this.username = storedName;
    }
  }
}
