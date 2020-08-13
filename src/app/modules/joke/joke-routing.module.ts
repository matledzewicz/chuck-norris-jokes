import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokeComponent } from './joke.component';


const routes: Routes = [
  {
    path: '',
    component: JokeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeRoutingModule { }
