import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../../services/network-calls/product-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit {
  products = [];

  constructor(
    private productApiService: ProductApiService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    // setTimeout(() => {
      this.productApiService.getProducts().subscribe((response: any) => {
        this.products = response.products;
        console.log(response);
      });
    // }, 8000)
  }
  onAddToCart(product: any) {
    // console.log(product);
    const cartItem = {
      product: product,
      quantity: 1,
      unit_price: product.price,
      sub_total: 1 * product.price
    };
    localStorage.setItem("cartItem", JSON.stringify(cartItem)); 
    this.route.navigate(['/products', product.id]);
  }
}
