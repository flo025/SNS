import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RescuerService {
  constructor(private httpClient: HttpClient) {}

  findRescuers(query: any) {
    const params = new HttpParams({ fromObject: query });
    return this.httpClient.get<{ results: any[]; total: number }>(
      'http://5.39.73.211:4200/rescuers',
      { params }
    );
  }
}
