import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { USER } from '../../interfaces/user.interface';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService, public dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((res) => {
      this.dialog.closeAll();
    })
  }
}
