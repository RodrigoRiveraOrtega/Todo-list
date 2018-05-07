import { Injectable } from '@angular/core';
import { Product } from '../product'
import { PRODUCTS } from '../products-store';

@Injectable()
export class ProductService {

  constructor() { }

  getBikes(): Product[] {
    return PRODUCTS;
  }
}