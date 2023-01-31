import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConfigsService } from '../url-configs.service';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(
    private http: HttpClient,
    private urlConfigs: UrlConfigsService
  ) { }

  getProducts() {
    return this.http.get(this.urlConfigs.GET_PRODUCTS_ENDPOINT);
  }
  getProductById(id: any) {
    return this.http.get(`${this.urlConfigs.GET_PRODUCTS_ENDPOINT}/${id}`);
  }
}
