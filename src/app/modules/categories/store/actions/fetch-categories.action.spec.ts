import { TestBed } from '@angular/core/testing';
import { Store, NgxsModule } from '@ngxs/store';
import { CategoriesService } from '../../services';
import { CategoriesStore } from '../categories.store';
import { FetchCategoriesAction } from './fetch-categories.action';
import { of, throwError } from 'rxjs';
import { createCategoriesStoreTestProviders } from '../categories.store.spec.providers';
import { Router } from '@angular/router';

describe('Store handles FetchCategoriesAction', () => {
  let store: Store;
  let categoriesService: jasmine.SpyObj<CategoriesService>;
  let router: jasmine.SpyObj<Router>;
  let categories: string[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([CategoriesStore]),
      ],
      providers: [
        ...createCategoriesStoreTestProviders()
      ],
    });

    store = TestBed.inject(Store);
    categoriesService = TestBed.inject(CategoriesService) as jasmine.SpyObj<CategoriesService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    categories = ['foo', 'bar'];
    categoriesService.fetchCategories.and.returnValue(of(categories));

  });

  it('should call categoriesService fetchCategories method with correct parameters', async () => {
    await store.dispatch(new FetchCategoriesAction());

    expect(categoriesService.fetchCategories).toHaveBeenCalled();
  });

  it('in case of success should save categories in state', async () => {
    await store.dispatch(new FetchCategoriesAction());

    expect(store.selectSnapshot((state) => state.categories.list)).toEqual(categories);
  });

  it('in case of error should navigate to error page', async () => {
    categoriesService.fetchCategories.and.returnValue(throwError(new Error('Ups!')));
    await store.dispatch(new FetchCategoriesAction());

    expect(router.navigate).toHaveBeenCalledWith(['/error']);
  });
});
