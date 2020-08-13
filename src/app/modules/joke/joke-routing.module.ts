import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokeComponent } from './joke.component';
import { JokeResolver } from './joke.resolver';

const routes: Routes = [
  {
    path: ':category',
    component: JokeComponent,
    resolve: { isReady: JokeResolver }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [JokeResolver]
})
export class JokeRoutingModule { }
