import { IProduct } from "../../models/products";
import { Requests } from "../../requests/baseAPI";

// A mock function to mimic making an async request for data
export function buyCart(body: object) {
  return Requests.api<IProduct[]>({ url: '/cart', body })
};
