import { Component, EventEmitter, Input, Output } from '@angular/core';
import { USER } from '../../interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Output() openSideBar = new EventEmitter<boolean>();
  @Input() data: USER;

  constructor(public dialog: MatDialog) {}

  openDialog(id: number) {
    const dialogRef = this.dialog.open(UserComponent, {
      data: { id: id , editMode: true },
      panelClass: 'sm'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openDialogDelete(id: number) {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      data: { id: id },
      panelClass: 'sm'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
