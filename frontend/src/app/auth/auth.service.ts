import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class authService implements CanActivate {

  constructor() { }

  ngOnInit(): void {
  }

  canActivate() :boolean {
    console.log(localStorage.getItem('key'))

    if(localStorage.getItem('key') == "true")
    {
      return true
    }
    else {
      return false
    }


  }

}
