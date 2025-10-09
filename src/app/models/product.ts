export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    languages: number;
}

export const Products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Product 1 description',
      price: 100,
      quantity: 0,
      languages: 0,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Product 2 description',
      price: 200,
      quantity: 0,
      languages: 0,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Product 3 description',
      price: 300,
      quantity: 0,
      languages: 0,
    },
  ];