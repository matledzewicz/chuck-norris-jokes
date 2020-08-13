import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { CategoriesListComponent } from './components';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesService } from './services';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesListComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
  ],
  providers: [
    CategoriesService,
  ],
})
export class CategoriesModule { }
