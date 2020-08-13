import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FetchJokeAction } from './store/actions/fetch-joke.action';

@Injectable()
export class JokeResolver implements Resolve<any> {
  constructor(private store: Store) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.store.dispatch(new FetchJokeAction(route.params.category));
  }
}
