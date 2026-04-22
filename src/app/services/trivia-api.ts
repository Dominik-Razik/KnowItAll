import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TriviaApi {
  difficulty: string = 'medium';

  constructor(private httpClient: HttpClient) { }

  getGeneralTrivia(): Observable<any> {
    return this.httpClient.get(`https://opentdb.com/api.php?amount=10&category=9&difficulty=${this.difficulty}&type=multiple`);
  }
}
