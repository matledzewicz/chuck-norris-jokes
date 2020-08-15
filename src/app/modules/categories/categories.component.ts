import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CategoriesSelector } from './store/selectors/categories.selector';
import { Observable } from 'rxjs';
import { Navigate } from '@ngxs/router-plugin';
import { chuckGifBase64 } from './chuck-gif';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  @Select(CategoriesSelector.SelectList) categories$: Observable<string[]>;
  chuckGifBase64 = chuckGifBase64;

  constructor(private store: Store) {}

  categoryClicked(category: string) {
    this.store.dispatch(new Navigate(['joke', category]));
  }
}
