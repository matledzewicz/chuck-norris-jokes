import { Selector } from '@ngxs/store';
import { JokeStore } from '../joke.store';
import { JokeState } from '../joke.state';
import { Joke } from '../../services';

export class JokeSelector {
  @Selector([JokeStore])
  static SelectCurrent(state: JokeState): Joke {
    return state.current;
  }

  @Selector([JokeStore])
  static SelectLastCategory(state: JokeState): string {
    return state.category;
  }
}
