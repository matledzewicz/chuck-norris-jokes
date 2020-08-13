import { TestBed } from '@angular/core/testing';
import { Store, NgxsModule } from '@ngxs/store';
import { CategoriesStore } from '../categories.store';
import { CategoriesSelector } from './categories.selector';
import { createCategoriesStoreTestProviders } from '../categories.store.spec.providers';

describe('Store handles CategoriesSelector, which', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([CategoriesStore]),
      ],
      providers: [
        ...createCategoriesStoreTestProviders(),
      ],
    });
    store = TestBed.inject(Store);
  });
  describe('has SelectList selector ', () => {
    it('should return null if list is null', async () => {
      await store.reset({
        categories: {
          list: null,
        },
      });

      expect(store.selectSnapshot(CategoriesSelector.SelectList)).toEqual(null);
    });

    it('should return value if list has value', async () => {
      await store.reset({
        categories: {
          list: ['foo'],
        },
      });

      expect(store.selectSnapshot(CategoriesSelector.SelectList)).toEqual(['foo']);
    });
  });
});
