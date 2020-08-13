import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Joke } from './joke.interface';

@Injectable()
export class JokeService {
  constructor(private httpClient: HttpClient) {

  }

  fetchJoke(category: string): Observable<Joke> {
    return this.httpClient.get<Joke>('https://api.chucknorris.io/jokes/random', { params: { category }});
  }
}
