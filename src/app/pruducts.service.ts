import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';

@Injectable()
export class PruductsService {

  /*Url donde se encuentran alojados los productos*/ 
  productsUrl = 'http://cdn.tekus.co/PT2018/Products.json';

  constructor(private http: HttpClient) { }
  
  /**
   * Author: Carlos Torres
   * getProducts
   * return: Observable 
   * Type: Products[] list products
   */
  getProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
