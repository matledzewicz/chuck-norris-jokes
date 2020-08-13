import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CategoriesSelector } from './store/selectors/categories.selector';
import { Observable } from 'rxjs';
import { Navigate } from '@ngxs/router-plugin';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  @Select(CategoriesSelector.SelectList) categories$: Observable<string[]>;

  constructor(private store: Store) {}

  categoryClicked(category: string) {
    this.store.dispatch(new Navigate(['joke', category]));
  }
}
