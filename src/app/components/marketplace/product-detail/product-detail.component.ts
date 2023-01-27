import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from 'src/app/services/network-calls/product-api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
quantity = 2;
itemsInCartCount = 1;
product: any;
constructor(
  private routes: ActivatedRoute,
  private productsApi: ProductApiService
) {}
ngOnInit(): void {
  this.routes.params.subscribe((param: any) => {
    console.log('id', param.id);
    this.getProductDetail(param.id)
  })
    const cartItem = JSON.parse(localStorage.getItem("cartItem") || '');
    

}
getProductDetail(id: any) {
  this.productsApi.getProductById(id).subscribe((response: any) => {
    console.log('product detail', response);
    this.product = response;
  });
}
}
