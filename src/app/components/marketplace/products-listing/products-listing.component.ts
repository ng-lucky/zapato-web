import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../services/network-calls/product-api.service';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit {
  products = [];

  constructor(
    private productApiService: ProductApiService
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productApiService.getProducts().subscribe((response: any) => {
      this.products = response.products;
      // console.log(response.products);
    });
  }
}
