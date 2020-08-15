import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from './joke.component';
import { JokeTemplateComponent } from './components';
import { JokeRoutingModule } from './joke-routing.module';
import { JokeService } from './services';
import { NgxsModule } from '@ngxs/store';
import { JokeStore } from './store/joke.store';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    JokeComponent,
    JokeTemplateComponent,
  ],
  imports: [
    CommonModule,
    JokeRoutingModule,
    MatIconModule,
    MatButtonModule,
    NgxsModule.forFeature([JokeStore]),
  ],
  providers: [
    JokeService,
  ],
})
export class JokeModule { }
