export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  price: number;
  hasImage?: boolean;
  smallImage?: any;
  bigImage?: any;
}
