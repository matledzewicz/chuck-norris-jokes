import { CategoriesService } from '../../services';
import { CategoriesState } from '../categories.state';
import { StateContext } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

export class FetchCategoriesAction {
  static readonly type = `[CATEGORIES] FETCH`;
  constructor() { }
}

export const fetchCategoriesReducerCreator =
  (categoriesService: CategoriesService, router: Router) =>
    (ctx: StateContext<CategoriesState>, action: FetchCategoriesAction) => {
      return categoriesService.fetchCategories()
      .pipe(
        tap((categories: string[]) => ctx.setState({
          ...ctx.getState(),
          list: categories,
        })),
        catchError(() => router.navigate(['/error'])),
      );
    };
