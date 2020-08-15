import { Provider } from '@angular/core';
import { of, identity } from 'rxjs';
import { Joke, JokeService } from '../services';
import { Router } from '@angular/router';

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

  const router = jasmine.createSpyObj('Router', ['navigate']);
  router.navigate.and.returnValue(new Promise(identity));

  return [
    { provide: JokeService, useValue: jokeService },
    { provide: Router, useValue: router },
  ];
};
