import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriesService {
  constructor(private httpClient: HttpClient) {

  }

  fetchCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>('https://api.chucknorris.io/jokes/categories');
  }
}
