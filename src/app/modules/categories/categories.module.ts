import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { CategoriesListComponent } from './components';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesListComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
  ],
  providers: [],
})
export class CategoriesModule { }
