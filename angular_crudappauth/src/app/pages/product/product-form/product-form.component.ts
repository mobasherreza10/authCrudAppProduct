
import { Component } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  constructor(private product: ProductService, private router: Router, private activeRouter: ActivatedRoute) { }

  editProduct = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    images: new FormControl(''),
    brand: new FormControl(''),
    tag: new FormControl('')
  });

  message: boolean = false;

  ngOnInit(): void {
    this.product.getProductsById(this.activeRouter.snapshot.params['id']).subscribe((result: any) => {

      this.editProduct = new FormGroup({
        name: new FormControl(result['name']),
        description: new FormControl(result['description']),
        price: new FormControl(result['price']),
        images: new FormControl(result['images']),
        brand: new FormControl(result['brand']),
        tag: new FormControl(result['tag'])
      });
    });
  }

  UpdateData() {
    this.product.updateProductData(this.activeRouter.snapshot.params['id'], this.editProduct.value).subscribe((result) => {
      console.log(result);
      this.message = true;

    });
  }
  removeMessage() {
    this.message = false;
  }

}
