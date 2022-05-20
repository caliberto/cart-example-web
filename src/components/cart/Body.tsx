import { store } from "app/store";
import { IconButton, Text } from "components/commons";
import { addCart, removeCart } from "features/cart/cartSlice";
import { addProduct, removeProduct } from "features/product/productsSlice";
import { IProductCart } from "models/products";
import { Counter } from "./Counter";
import { Table, TableItem } from "../commons";
import { useAppSelector } from "app/hooks";
import { AddCircleOutlineRounded, RemoveCircleOutlineRounded } from "@mui/icons-material";
import { toLocalePrice } from "utility/locale/price";

export function Body(): JSX.Element {
    const products = useAppSelector(state => state.products.items)
    const cart = useAppSelector(state => state.cart.items);

    const tableItems: TableItem[] = [
        {
            head: "Model",
            body: "name",
            manageItems: (product: IProductCart) => <IconButton variant="remove" role="button" onClick={() => removeFromCart(product)}>Remove<RemoveCircleOutlineRounded className="ms-2 mb-1"/></IconButton>,
            order: "asc"
        },
        {
            head: "SKU",
            body: "sku"
        },
        {
            head: "Size",
            body: "size"
        },
        {
            head: "Qty",
            body: "quantity",
            manageItems: (product: IProductCart) => <IconButton variant="add" role="button" onClick={() => addToCart(product)}>Add<AddCircleOutlineRounded className="ms-2 mb-1"/></IconButton>,
            order: "asc"
        },
        {
            head: "Price",
            body: "price",
            formatter: (value : number) => toLocalePrice(value)
        }
    ];

    const removeFromCart = (productCart: IProductCart) => {
        store.dispatch(removeCart(productCart));
        store.dispatch(addProduct(productCart));
    }

    const addToCart = (productCart: IProductCart) => {
        const product = products.find((item) => item.ID === productCart.productID);
        const productDetail = product?.details.find((detail) => detail.ID === productCart.productDetailID);

        if (productDetail && productDetail.quantity > 0) {
            store.dispatch(addCart(productCart));
            store.dispatch(removeProduct(productCart));
        }
    }

    return (
        <div className="mx-5 bg-white border border-dark rounded h-100 px-4 pt-4 pb-5">
            <div className="mb-3">
                <Text variant="title-xl">Your cart contains:</Text>
            </div>
            <Table tableItems={tableItems} list={cart} relation={"productDetailID"}/>
            <Counter />
        </div>
    );
}