import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
    SideBarComponent,
    DeleteUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
