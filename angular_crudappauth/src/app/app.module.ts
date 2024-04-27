import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './pages/product/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListModule } from '../app/pages/product/product-list/product-list.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './pages/product/product-form/product-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    AddProductComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    ProductListModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent, ProductFormComponent]
})
export class AppModule { }
