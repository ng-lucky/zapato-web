import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConfigsService } from '../url-configs.service';
import { HttpUtilsService } from '../http-utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private urlConfigs: UrlConfigsService,
    private httpUtils: HttpUtilsService
  ) { }
  login(authData: any) {
    return this.httpUtils.create(this.urlConfigs.LOGIN_ENDPOINT, JSON.stringify(authData));
  }
}
