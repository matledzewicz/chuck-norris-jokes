import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories.component';
import { CategoriesListComponent } from './components';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesService } from './services';
import { NgxsModule } from '@ngxs/store';
import { CategoriesStore } from './store/categories.store';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesListComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    NgxsModule.forFeature([CategoriesStore]),
  ],
  providers: [
    CategoriesService,
  ],
})
export class CategoriesModule { }
