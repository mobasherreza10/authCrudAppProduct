import { Component } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private product: ProductService, private router: Router) { }

  addProduct = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    images: new FormControl(''),
    brand: new FormControl(''),
    tag: new FormControl('')
  });

  message: boolean = false;

  ngOnInit(): void {

  }

  SaveData() {


    this.product.addProduct(this.addProduct.value).subscribe((result) => {
      console.log(result);
      this.message = true;
      this.addProduct.reset({});
      this.router.navigate(['/dashboard']);
    });
  }
  removeMessage() {
    this.message = false;
  }

}
