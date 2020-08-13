import { Provider } from '@angular/core';
import { of } from 'rxjs';
import { Joke, JokeService } from '../services';

export const createJokeStoreTestProviders = (): Provider[] => {
  // Spy declaration with default success responses
  const joke: Joke = {
    created_at: 'some time ago',
    icon_url: 'some icon',
    id: 'some id',
    updated_at: 'some time ago',
    url: 'some url',
    value: 'Some really funny joke',
  };

  const jokeService = jasmine.createSpyObj('JokeService', ['fetchJoke']);
  jokeService.fetchJoke.and.returnValue(of(joke));

  return [
    { provide: JokeService, useValue: jokeService },
  ];
};
