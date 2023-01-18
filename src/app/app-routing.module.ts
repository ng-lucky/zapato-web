import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListingComponent } from './components/marketplace/products-listing/products-listing.component';
import { ProductDetailComponent } from './components/marketplace/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: ProductsListingComponent},
  {path: 'products', component: ProductsListingComponent},
  {path: 'products/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
