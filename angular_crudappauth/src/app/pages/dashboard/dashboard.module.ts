import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ProductListModule } from '../product/product-list/product-list.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        ProductListModule
    ]
})
export class DashboardModule { }
