import { api } from "../../models/baseAPI";
import { IProduct } from "../../models/products";

// A mock function to mimic making an async request for data
export function getProducts() {
  return api<IProduct[]>({ url: '/products' })
};
