import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<LoginFormComponent>){ }

  id: string = "";
  mdp: string = "";
  hide: boolean = true;
  loged: boolean =false;

  ngOnInit(): void {

  }


  login(){
    console.log(this.id, this.mdp);

    if(this.id == "admin" && this.mdp == "admin"){
      this.loged = true;
      localStorage.setItem('key', 'true');
    }
    else {
      this.loged = false;
    }

    this.dialogRef.close(this.loged);

  }

}
