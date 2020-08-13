import { Selector } from '@ngxs/store';
import { CategoriesState } from '../categories.state';
import { CategoriesStore } from '../categories.store';

export class CategoriesSelector {
  @Selector([CategoriesStore])
  static SelectList(state: CategoriesState): string[] {
    return state.list;
  }
}
