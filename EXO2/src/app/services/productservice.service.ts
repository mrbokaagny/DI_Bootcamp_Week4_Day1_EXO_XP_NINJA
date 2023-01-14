import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products : Product[] = []

  product : Product = {name : '' , price : ''}

  createProuct(prd:Product){
    this.products.push(prd)
    console.log(this.product)
  }

  allProduct(){
    return this.products
  }

}
