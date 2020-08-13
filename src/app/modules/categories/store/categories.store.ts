import { CategoriesState } from './categories.state';
import { State } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { CategoriesService } from '../services';
import { FetchCategoriesAction, fetchCategoriesReducerCreator } from './actions/fetch-categories.action';
import { attachAction } from '@ngxs-labs/attach-action';

@State<CategoriesState>({
  name: 'categories',
  defaults: {
    list: null,
  },
})
@Injectable()
export class CategoriesStore {
  constructor(categoriesService: CategoriesService) {
    attachAction(CategoriesStore, FetchCategoriesAction, fetchCategoriesReducerCreator(categoriesService));
  }
}
