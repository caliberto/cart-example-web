export interface IProductCart {
    productID: number;
    productDetailID: number;
    name: string;
    sku: string;
    size: number;
    quantity: number;
    price: number;
}

export interface IProduct {
    id: number;
    name: string;
    code: string;
    details: IProductDetail[]
}

export interface IProductDetail {
    id: number;
    size: number;
    quantity: number;
    price: number;
    salePrice: number;
}