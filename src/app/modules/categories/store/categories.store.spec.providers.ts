import { Provider } from '@angular/core';
import { of } from 'rxjs';
import { CategoriesService } from '../services';

export const createCategoriesStoreTestProviders = (): Provider[] => {
  // Spy declaration with default success responses
  const categories = ['default'];
  const categoriesService = jasmine.createSpyObj('CategoriesService', ['fetchCategories']);
  categoriesService.fetchCategories.and.returnValue(of(categories));

  return [
    { provide: CategoriesService, useValue: categoriesService },
  ];
};
