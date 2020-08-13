import { TestBed } from '@angular/core/testing';
import { Store, NgxsModule } from '@ngxs/store';
import { CategoriesService } from '../../services';
import { CategoriesStore } from '../categories.store';
import { FetchCategoriesAction } from './fetch-categories.action';
import { of } from 'rxjs';

describe('Store handles FetchCategoriesAction', () => {
  let store: Store;
  let categoriesService: jasmine.SpyObj<CategoriesService>;
  let categories: string[];

  beforeEach(() => {
    categories = ['foo', 'bar'];
    categoriesService = jasmine.createSpyObj('CategoriesService', ['fetchCategories']);
    categoriesService.fetchCategories.and.returnValue(of(categories));

    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([CategoriesStore]),
      ],
      providers: [
        { provide: CategoriesService, useValue: categoriesService },
      ],
    });

    store = TestBed.inject(Store);
    categoriesService = TestBed.inject(CategoriesService) as jasmine.SpyObj<CategoriesService>;
  });

  it('should call categoriesService fetchCategories method with correct parameters', async () => {
    await store.dispatch(new FetchCategoriesAction());

    expect(categoriesService.fetchCategories).toHaveBeenCalled();
  });

  it('in case of success should save categories in state', async () => {
    await store.dispatch(new FetchCategoriesAction());

    expect(store.selectSnapshot((state) => state.categories.list)).toEqual(categories);
  });

  it('in case of error should ...', (done) => {
   done.fail('Implement error case');
  });
});
