import { Component } from '@angular/core';
import {LoginFormComponent} from "./login-form/login-form.component";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events: string[] = [];
  opened: boolean = false;
  loged: boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {

    if(localStorage.getItem('key') == "true"){
      this.loged = true;
    }

  }

  toggleSidebar() {
    this.opened = !this.opened;
  }

  openDialog(): void {
    const Refdialog = this.dialog.open(LoginFormComponent);

    Refdialog.afterClosed().subscribe(result => {
      this.loged = result;
    })
  }

  logout(){
    this.loged = false;
    localStorage.removeItem('key');

  }

}
