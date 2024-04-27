import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiUrl = 'http://localhost:3000/products';

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get(this.apiUrl);
    }

    addProduct(data: any) {
        console.log(data);
        return this.http.post(this.apiUrl, data);


    }

    updateProductData(id: any, data: any) {
        return this.http.put(`${this.apiUrl}/${id}`, data);
    }
    getProductsById(id: any) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }

    deleteProduct(id: any) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
