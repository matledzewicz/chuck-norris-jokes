import { State } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { attachAction } from '@ngxs-labs/attach-action';
import { JokeState } from './joke.state';
import { JokeService } from '../services';
import { FetchJokeAction, fetchJokeReducerCreator } from './actions/fetch-joke.action';

@State<JokeState>({
  name: 'joke',
  defaults: {
    current: null,
    category: null,
  },
})
@Injectable()
export class JokeStore {
  constructor(jokeService: JokeService) {
    attachAction(JokeStore, FetchJokeAction, fetchJokeReducerCreator(jokeService));
  }
}
