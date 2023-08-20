import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { USER } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  form: FormGroup;
  editMode: boolean = false;

  user: USER;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService, public dialog: MatDialog) {
    this.editMode = data.editMode;
    if(this.editMode) {
      this.getUserById(data.id);
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      job: new FormControl()
    })
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe((res: any) => {
      this.user = res.data;
      this.form.get('name')?.setValue(this.user.first_name);
    })
  }

  updateUser(id: number) {
    this.userService.updateUser(id, this.form.value).subscribe((res) => {
      this.dialog.closeAll();
    })
  }

  addUser() {
    this.userService.addUser(this.form.value).subscribe((res) => {
      this.dialog.closeAll();
    })
  }

}
