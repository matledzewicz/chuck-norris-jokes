import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategoriesResolver } from './categories.resolver';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    resolve: { isReady: CategoriesResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CategoriesResolver]
})
export class CategoriesRoutingModule { }
