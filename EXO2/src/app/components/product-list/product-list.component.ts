import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/productservice.service';
import { Product } from 'src/app/models/product.model';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private service : ProductService ,  private formBuilder: FormBuilder) { }

  formsCreate = this.formBuilder.group({
    name: '',
    price: ''
  });

  products: Product[] = []

  ngOnInit(): void {
    this.allProduct()
  }

  allProduct(){
    this.products = this.service.allProduct()
  }

  addProduct(){
    const name = this.formsCreate.get('name')?.value as string
    const price = this.formsCreate.get('price')?.value as string
    const prdt : Product = { name : name, price : price}
    this.service.createProuct(prdt)
    this.formsCreate.reset()
  }

}
