import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeSelector } from './store/selectors/joke.selector';
import { Joke } from './services';
import { Select, Store } from '@ngxs/store';
import { FetchJokeAction } from './store/actions/fetch-joke.action';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent {
  @Select(JokeSelector.SelectCurrent) currentJoke$: Observable<Joke>;

  constructor(private store: Store) {
  }

  displayAnother() {
    this.store.dispatch(new FetchJokeAction(
      this.store.selectSnapshot(JokeSelector.SelectLastCategory),
    ));
  }
}
