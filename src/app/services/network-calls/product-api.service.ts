import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get('https://dummyjson.com/products');
  }
  getProductById(id: any) {
    return this.http.get('https://dummyjson.com/products/' + id);
  }
}
