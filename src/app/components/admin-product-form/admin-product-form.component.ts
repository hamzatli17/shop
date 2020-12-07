
import { ProductService } from './../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

import { CategoryService } from './../../services/category.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Subscription } from 'rxjs';
//import * as firebase from 'firebase';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
   categories$;
    product :any  = {};
   id;
   subscription: Subscription;
  constructor( private productService:ProductService,categoryService:CategoryService,private router:Router,private route: ActivatedRoute) {
    this.categories$=categoryService.getCategories();
    console.log('cc');
      
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('cc' );
  if (this.id) {this.productService.get(this.id).valueChanges().subscribe(
    p => this.product = p 
  
    );
  
  }
  }

  ngOnInit(): void {
  }
  save(product){
    console.log(this.product);
    if (this.id) {this.productService.update(this.id, product);}
    else {this.productService.create(product);}
    this.router.navigate(['/admin/products']);};
  delete(){
    {
      if (!confirm('Are you sure you want to delete this product?')) return;
      
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
    }
  }; 
  

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
