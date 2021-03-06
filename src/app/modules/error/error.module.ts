import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
  declarations: [
    ErrorComponent,
  ],
  imports: [
    RouterModule,
    MatButtonModule,
    CommonModule,
    ErrorRoutingModule,
  ],
  exports: [
    ErrorComponent,
  ],
})
export class ErrorModule { }
