import { Product } from './../../models/product';
import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  // @Input('product') product: Product;
  // @Input('product') product: Product;
  // @Input('show-actions') showActions = true;
   categories$;
  products: any = [];
  filteredProducts: any= [];
  category: string;
 
  constructor(private route: ActivatedRoute,
   private productService: ProductService,
   private categoryService: CategoryService
  ) { 
    console.log('hi');
    // this.categories$ = this.categoryService.getCategories();
    // this.products$=this.productService.getAll();
    // console.log(this.products$,this.categories$ );
    this.categories$ = this.categoryService.getCategories();
    this.productService
   .getAll().pipe(
     switchMap(products => {
        this.products = products;
      
         console.log(this.products);
        console.log(this.route.queryParamMap);
        
         return this.route.queryParamMap;
      }))
      .subscribe(params => {
         this.category = params.get('category');
        console.log(this.category);
        
         this.filteredProducts = (this.category) ? 
          this.products.filter(p => p.category === this.category) : 
          console.log('bbb');
          console.log(this.filteredProducts );
          
          this.products;
      })
    };
  
  }

