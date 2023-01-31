import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilsService {

  constructor(
    private http: HttpClient
  ) { }
  create(url: string, reqBody: any) {
    return this.http.post(url, reqBody);
  }
}
