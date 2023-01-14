import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { ProductService } from '../services/productservice.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProductDetailComponent,ProductListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers : [ProductService] ,
  exports : [ProductListComponent,ProductDetailComponent]
})
export class ProductModule { }
