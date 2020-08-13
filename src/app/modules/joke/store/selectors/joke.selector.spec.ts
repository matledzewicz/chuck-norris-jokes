import { TestBed } from '@angular/core/testing';
import { Store, NgxsModule } from '@ngxs/store';
import { JokeStore } from '../joke.store';
import { Joke } from '../../services';
import { JokeSelector } from './joke.selector';
import { createJokeStoreTestProviders } from '../joke.store.spec.providers';

describe('Store handles JokeSelector, which', () => {
  let store: Store;

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
  });
  describe('has SelectCurrent selector ', () => {
    it('should return null if current joke is null', async () => {
      await store.reset({
        joke: {
          current: null,
        }
      });

      expect(store.selectSnapshot(JokeSelector.SelectCurrent)).toEqual(null);
    });

    it('should return value if current has value', async () => {
      const joke: Joke = {
        created_at: 'some time ago',
        icon_url: 'some icon',
        id: 'some id',
        updated_at: 'some time ago',
        url: 'some url',
        value: 'Some really funny joke',
      };

      await store.reset({
        joke: {
          current: joke,
        }
      });

      expect(store.selectSnapshot(JokeSelector.SelectCurrent)).toEqual(joke);
    });
  });
  describe('has SelectLastCategory selector ', () => {
    it('should return null if current joke is null', async () => {
      await store.reset({
        joke: {
          category: null,
        }
      });

      expect(store.selectSnapshot(JokeSelector.SelectLastCategory)).toEqual(null);
    });

    it('should return value if current has value', async () => {
      await store.reset({
        joke: {
          category: 'category',
        }
      });

      expect(store.selectSnapshot(JokeSelector.SelectLastCategory)).toEqual('category');
    });
  });
});
