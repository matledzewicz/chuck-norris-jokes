import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from './joke.component';
import { JokeTemplateComponent } from './components';
import { JokeRoutingModule } from './joke-routing.module';

@NgModule({
  declarations: [
    JokeComponent,
    JokeTemplateComponent,
  ],
  imports: [
    CommonModule,
    JokeRoutingModule,
  ],
  providers: [],
})
export class JokeModule { }
