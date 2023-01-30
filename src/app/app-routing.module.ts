import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListingComponent } from './components/marketplace/products-listing/products-listing.component';
import { ProductDetailComponent } from './components/marketplace/product-detail/product-detail.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NotFoundComponent } from './app-core/common/not-found/not-found.component';
import { MyOrderHistoryComponent } from './components/profile/my-order-history/my-order-history.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: ProductsListingComponent},
  {path: 'products', component: ProductsListingComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'order-history', component: MyOrderHistoryComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
