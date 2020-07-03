import { Component } from '@angular/core';
import { Hero} from '/hero';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(n) {
    switch(n)
    {
    case 1:
      window.alert('The product has been shared!');
      break;
    case 2:
      window.alert('The product has been NOT shared!');
      break;
    default:

    }
  }


  addNewProduct()
  {
    this.products.push(new Product('new product', 'description...'));
    //this.selectedHero = this.heroes[this.heroes.length-1];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/