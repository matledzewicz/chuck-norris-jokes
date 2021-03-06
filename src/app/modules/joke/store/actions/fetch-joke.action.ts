import { StateContext } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { JokeService, Joke } from '../../services';
import { JokeState } from '../joke.state';
import { Navigate } from '@ngxs/router-plugin';

export class FetchJokeAction {
  static readonly type = `[JOKE] FETCH`;
  constructor(public category: string) { }
}

export const fetchJokeReducerCreator =
  (jokeService: JokeService) =>
    (ctx: StateContext<JokeState>, action: FetchJokeAction) => {
      return jokeService.fetchJoke(action.category)
      .pipe(
        tap((joke: Joke) => ctx.setState({
          ...ctx.getState(),
          current: joke,
          category: action.category,
        })),
        catchError(() => ctx.dispatch(new Navigate(['/error']))),
      );
    };
