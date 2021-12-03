import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-rescuer',
  templateUrl: './crud-rescuer.component.html',
  styleUrls: ['./crud-rescuer.component.css']
})
export class CrudRescuerComponent implements OnInit {

  constructor() { }

  nom: string="";
  prenom: string ="";
  url: string="";


  ngOnInit(): void {
  }

  add(){


  }

}
