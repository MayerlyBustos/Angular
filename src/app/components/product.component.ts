import { Component } from '@angular/core';
import { Producto} from '../product.model';

@Component({
 selector: 'app-product',
 templateUrl: './productComponent.html'
})
export class ProductComponent{

  producto: Producto = {    
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    };
  }