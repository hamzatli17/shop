import { AuthService } from './services/auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFireDatabaseModule } from '@angular/fire/database'; 
import { AngularFireAuthModule } from '@angular/fire/auth';
import {DataTablesModule} from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminProductFormComponent } from './components/admin-product-form/admin-product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    MyOrdersComponent,
    AdminProductFormComponent,
    ProductsComponent,
    ProductFilterComponent,
    
  ],
  imports: [
    BrowserModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 