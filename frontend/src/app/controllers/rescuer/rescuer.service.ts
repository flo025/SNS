import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class RescuerService {

  constructor(private httpClient: HttpClient) {
  }

  findRescuers(query: any) {
    const params = new HttpParams({fromObject: query})
    return this.httpClient.get<{results: any[], total: number}>('http://10.8.251.139:3000/rescuers', {params})
  }

}
