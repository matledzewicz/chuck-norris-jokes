import { TestBed } from '@angular/core/testing';
import { Store, NgxsModule } from '@ngxs/store';
import { of, throwError } from 'rxjs';
import { JokeService, Joke } from '../../services';
import { JokeStore } from '../joke.store';
import { FetchJokeAction } from './fetch-joke.action';
import { createJokeStoreTestProviders } from '../joke.store.spec.providers';
import { Router } from '@angular/router';

describe('Store handles FetchJokeAction', () => {
  let store: Store;
  let jokeService: jasmine.SpyObj<JokeService>;
  let router: jasmine.SpyObj<Router>;

  let joke: Joke;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([JokeStore]),
      ],
      providers: [
        ...createJokeStoreTestProviders(),
      ],
    });

    store = TestBed.inject(Store);
    jokeService = TestBed.inject(JokeService) as jasmine.SpyObj<JokeService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;


    joke = {
      created_at: 'some time ago',
      icon_url: 'some icon',
      id: 'some id',
      updated_at: 'some time ago',
      url: 'some url',
      value: 'Some really funny joke',
    };

    jokeService.fetchJoke.and.returnValue(of(joke));
  });

  it('should call jokeService fetchJoke method with correct parameters', async () => {
    await store.dispatch(new FetchJokeAction('foo-category'));

    expect(jokeService.fetchJoke).toHaveBeenCalledWith('foo-category');
  });

  it('in case of success should save joke in state', async () => {
    await store.dispatch(new FetchJokeAction('foo-category'));

    expect(store.selectSnapshot((state) => state.joke.current)).toEqual(joke);
  });

  it('in case of success should also save last cateogry in state', async () => {
    await store.dispatch(new FetchJokeAction('bar-category'));

    expect(store.selectSnapshot((state) => state.joke.category)).toEqual('bar-category');
  });

  it('in case of error should navigate to error page', async () => {
    jokeService.fetchJoke.and.returnValue(throwError(new Error('Ups!')));
    await store.dispatch(new FetchJokeAction('bar-category'));

    expect(router.navigate).toHaveBeenCalledWith(['/error']);
  });
});
