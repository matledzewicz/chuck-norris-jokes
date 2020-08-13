import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FetchCategoriesAction } from './store/actions/fetch-categories.action';

@Injectable()
export class CategoriesResolver implements Resolve<any> {
  constructor(private store: Store) {
  }

  resolve(): Observable<any> {
    return this.store.dispatch(new FetchCategoriesAction());
  }
}
