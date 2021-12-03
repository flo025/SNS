import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-rescues',
  templateUrl: './crud-rescues.component.html',
  styleUrls: ['./crud-rescues.component.css']
})
export class CrudRescuesComponent implements OnInit {

  constructor() { }

  titre: string="";
  date = Date.now();
  people_saved: number=0;

  ngOnInit(): void {
  }

}
