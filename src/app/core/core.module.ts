import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})

export class CoreModule { }
