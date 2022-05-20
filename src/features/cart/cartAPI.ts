import { IProduct } from "../../models/products";
import { api } from "../../models/baseAPI";

// A mock function to mimic making an async request for data
export function buyCart(body: object) {
  return api<IProduct[]>({ url: '/products', method: "PUT", body })
};
