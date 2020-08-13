import { CategoriesService } from '../../services';
import { CategoriesState } from '../categories.state';
import { StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';

export class FetchCategoriesAction {
  static readonly type = `[CATEGORIES] FETCH`;
  constructor() { }
}

export const fetchCategoriesReducerCreator =
  (categoriesService: CategoriesService) =>
    (ctx: StateContext<CategoriesState>, action: FetchCategoriesAction) => {
      return categoriesService.fetchCategories()
      .pipe(
        tap((categories: string[]) => ctx.setState({
          ...ctx.getState(),
          list: categories,
        }))
      );
    };
