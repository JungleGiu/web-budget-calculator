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
    name: 'SEO',
    description:
      'Website optimization for SEO, positioning and search engine marketing of a website',
    price: 300,
    quantity: 0,
    languages: 0,
  },
  {
    id: 2,
    name: 'ADS',
    description: 'Adwords campaign creation and management personalized to your needs',
    price: 400,
    quantity: 0,
    languages: 0,
  },
  {
    id: 3,
    name: 'Web',
    description: 'Development of a full responsive website for your business',
    price: 500,
    quantity: 0,
    languages: 0,
  },
];
