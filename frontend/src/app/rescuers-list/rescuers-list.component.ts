import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RescuerService} from "../controllers/rescuer/rescuer.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator/paginator";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-rescuers-list',
  templateUrl: './rescuers-list.component.html',
  styleUrls: ['./rescuers-list.component.css']
})
export class RescuersListComponent implements OnInit, AfterViewInit {

  @ViewChild('paginator') paginator!: MatPaginator

  filterControl = new FormControl('')
  rescuers: any[] = []

  formGroup = new FormGroup({
    'filter': this.filterControl
  })

  constructor(private readonly rescuerService: RescuerService) {
  }

  ngAfterViewInit() {
    this.reload()
    this.paginator.page.subscribe(() => {
      this.reload()
    })
    this.formGroup.valueChanges.subscribe(() => {
      this.paginator.pageIndex = 0
      this.reload()
    })
  }

  reload() {
    this.rescuerService.findRescuers(Object.assign({}, this.formGroup.value, {
      skip: this.paginator.pageIndex * this.paginator.pageSize,
      take: this.paginator.pageSize
    })).subscribe(({results, total}) => {
      this.paginator.length = total
      this.rescuers = results
    })
  }

  ngOnInit(): void {
  }

}
