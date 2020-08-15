import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './modules/error/error.component';


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
    component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
