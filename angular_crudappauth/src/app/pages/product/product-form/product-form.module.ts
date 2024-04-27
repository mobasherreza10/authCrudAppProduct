import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../product-form/product-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ProductFormComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [ProductFormComponent]
})
export class ProductFormModule { }
