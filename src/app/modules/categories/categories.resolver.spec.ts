import { TestBed } from '@angular/core/testing';
import { CategoriesResolver } from './categories.resolver';
import { Store } from '@ngxs/store';
import { FetchCategoriesAction } from './store/actions/fetch-categories.action';
import { of } from 'rxjs';

describe('CategoriesResolver', () => {
  let sut: CategoriesResolver;
  let store: jasmine.SpyObj<Store>;
  let exampleState;
  beforeEach(() => {
    exampleState = { state: 'some state ' };

    store = jasmine.createSpyObj('Store', ['dispatch']);
    store.dispatch.and.returnValue(of(exampleState));
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CategoriesResolver,
        { provide: Store, useValue: store },
      ],
    });

    sut = TestBed.inject(CategoriesResolver);
  });

  describe('has resolve method, which', () => {
    it('should dispatch FetchCategoriesAction', () => {
      sut.resolve();

      expect(store.dispatch).toHaveBeenCalledWith(new FetchCategoriesAction());
    });
    it('should return value from store.dispatch', (done: DoneFn) => {
      sut.resolve().subscribe((result) => {
        expect(result).toEqual(exampleState);
        done();
      });
    });
  });
});
