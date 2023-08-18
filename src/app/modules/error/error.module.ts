import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorComponent } from './components/error.component';


@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    SharedModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
