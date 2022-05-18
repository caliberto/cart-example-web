export interface IProductCart {
    productID: number;
    productDetailID: number;
    name: string;
    sku: string;
    size: number;
    quantity: number;
    price: number;
}

export const initialProductCart : IProductCart = {
    productID: 0,
    productDetailID: 0,
    name: "",
    sku: "",
    size: 0,
    quantity: 0,
    price: 0,
};

export interface IProduct {
    ID: number;
    name: string;
    sku: string;
    image: string;
    price: number;
    salePrice: number;
    details: IProductDetail[];
}

export const initialProduct : IProduct = {
    ID: 0,
    name: "",
    sku: "",
    image: "",
    price: 0,
    salePrice: 0,
    details: []
};

export interface IProductDetail {
    ID: number;
    size: number;
    quantity: number;
}

export const initialProductDetail : IProductDetail = {
    ID: 0,
    size: 0,
    quantity: 0,
};