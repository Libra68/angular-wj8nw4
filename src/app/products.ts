let nextId = 1;

export class Product {
  id: number;
   

  constructor(id: number, public name: string, price: number, public description?: string)
   {
     if(id < 1)
      this.id = nextId++;
      else
      this.id = id;
    }
}



export const products = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: ''
  },
  {
    name: 'Notebook High-End',
    price: 3499,
    description: 'High Performance Gaming Notebook'
  },
  {
    name: 'Notebook Standard',
    price: 999,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Notebook Beginner',
    price: 299,
    description: 'Low Performance waste'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/