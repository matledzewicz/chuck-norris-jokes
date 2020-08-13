import { Joke } from '../services';

export interface JokeState {
  current: Joke;
  category: string;
}
