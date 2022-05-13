import { IProduct } from "../../models/products";
import { Requests } from "../../requests/baseAPI";

// A mock function to mimic making an async request for data
export function getProducts() {
  return Requests.api<IProduct[]>({ url: '/products' })
};
