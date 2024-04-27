import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }
  productData: any = [];
  ngOnInit(): void {
    this.productService.getProducts().subscribe((allData) => {
      console.log(allData);
      this.productData = allData;
    });
  }

  addProduct(): void {
    this.router.navigate(['/add']);
  }
  deleteProduct(product_id: any) {
    // console.log(product_id);
    this.productService.deleteProduct(product_id).subscribe((result) => {
      // console.log(result);
      this.ngOnInit();
    });
  }


}
