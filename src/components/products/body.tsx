import { useAppSelector } from "app/hooks";
import { store } from "app/store";
import { countProductsItems, loadProductsAsync } from "features/product/productsSlice";
import { useEffect } from "react";
import { Card } from "./Card";

export function Body(): JSX.Element {
    const products = useAppSelector(state => state.products.items)
    const count = useAppSelector(countProductsItems);

    useEffect(() => { store.dispatch(loadProductsAsync()) }, [])
    useEffect(() => { if (products.length > 0) console.log(products) }, [products])

    return (
        <div className="mx-5">
            <div className="d-flex">
                <div className="fw-bold fs-3">LAST PRODUCTS AVAILABLE</div>
                <div className="fs-6 ms-auto">{`${count} products available`}</div>
            </div>
            <div className=" border-top border-dark row">
                {
                    products.map(product => <Card product={product}/>)
                }
            </div>
        </div>
    );
}