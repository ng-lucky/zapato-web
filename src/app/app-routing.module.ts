import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListingComponent } from './components/marketplace/products-listing/products-listing.component';
import { ProductDetailComponent } from './components/marketplace/product-detail/product-detail.component';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  {path: '', component: ProductsListingComponent},
  {path: 'products', component: ProductsListingComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
