import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/categories/categories.module').then(m => m.CategoriesModule),
  },
  {
    path: 'joke',
    loadChildren: () => import('src/app/modules/joke/joke.module').then(m => m.JokeModule),
  },
  {
    path: 'error',
    loadChildren: () => import('src/app/modules/error/error.module').then(m => m.ErrorModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
