import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { USER } from '../../interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  usersList: USER[] = [];
  selectedIndex: number = -1;
  openSideBar: boolean = false;
  selectedUser: USER;

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  setIndex(index: number) {
    this.selectedIndex = index;
 }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res: any) => {
      this.usersList = res.data;
    })
  }

  onSelectUser(user: USER) {
    this.openSideBar = true;
    this.selectedUser = user;
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserComponent, {
      data: { },
      panelClass: 'sm'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
