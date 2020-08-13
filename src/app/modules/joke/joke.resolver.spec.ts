import { TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { JokeResolver } from './joke.resolver';
import { FetchJokeAction } from './store/actions/fetch-joke.action';
import { ActivatedRouteSnapshot } from '@angular/router';

describe('JokeResolver', () => {
  let sut: JokeResolver;
  let store: jasmine.SpyObj<Store>;
  let exampleState;
  beforeEach(() => {
    exampleState = { state: 'some state' };

    store = jasmine.createSpyObj('Store', ['dispatch']);
    store.dispatch.and.returnValue(of(exampleState));

    TestBed.configureTestingModule({
      imports: [],
      providers: [
        JokeResolver,
        { provide: Store, useValue: store },
      ],
    });

    sut = TestBed.inject(JokeResolver);
  });

  describe('has resolve method, which', () => {
    it('should dispatch FetchJokeAction', () => {
      const activatedRoute: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
      activatedRoute.params = { category: 'foo-category' };
      sut.resolve(activatedRoute);

      expect(store.dispatch).toHaveBeenCalledWith(new FetchJokeAction('foo-category'));
    });
    it('should return value from store.dispatch', (done: DoneFn) => {
      const activatedRoute: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
      activatedRoute.params = { category: 'foo-category' };
      sut.resolve(activatedRoute).subscribe((result) => {
        expect(result).toEqual(exampleState);
        done();
      });
    });
  });
});
