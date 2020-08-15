import { Provider } from '@angular/core';
import { of, identity } from 'rxjs';
import { CategoriesService } from '../services';
import { Router } from '@angular/router';

export const createCategoriesStoreTestProviders = (): Provider[] => {
  // Spy declaration with default success responses
  const categories = ['default'];
  const categoriesService = jasmine.createSpyObj('CategoriesService', ['fetchCategories']);
  categoriesService.fetchCategories.and.returnValue(of(categories));

  const router = jasmine.createSpyObj('Router', ['navigate']);
  router.navigate.and.returnValue(new Promise(identity));

  return [
    { provide: CategoriesService, useValue: categoriesService },
    { provide: Router, useValue: router },
  ];
};
