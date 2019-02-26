export interface ProductImage {
  name?: string;
  productId?: number;
  content?: any;
  type?: string;
}
export interface RawImage {
  productId?: number;
  content?: Blob;
}
