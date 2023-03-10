import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-core/common/header/header.component';
import { FooterComponent } from './app-core/common/footer/footer.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProductsListingComponent } from './components/marketplace/products-listing/products-listing.component';
import { ProductDetailComponent } from './components/marketplace/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/auth/login/login.component';
import { NotFoundComponent } from './app-core/common/not-found/not-found.component';
import { MyOrderHistoryComponent } from './components/profile/my-order-history/my-order-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ProductsListingComponent,
    ProductDetailComponent,
    LoginComponent,
    NotFoundComponent,
    MyOrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
