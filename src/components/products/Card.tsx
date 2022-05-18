import { initialProductCart, initialProductDetail, IProduct, IProductCart, IProductDetail } from "models/products"
import * as Images from "images";
import { useEffect, useState } from "react";
import { store } from "app/store";
import { addCart } from "features/cart/cartSlice";
import { removeProduct } from "features/product/productsSlice";

interface CardProps {
    product: IProduct
}

export function Card({ product }: CardProps): JSX.Element {
    const [detailSelected, setDetailSelected] = useState<IProductCart>(initialProductCart);

    useEffect(() => {
        if (product.details.length === 1)
            selectProductDetail(product.details[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function selectImage() {
        let image: string = "";
        switch (product.image) {
            case "Ray-Ban Wayfarer":
                image = Images.RayBanWayfarer;
                break;
            case "Ray-Ban Clubmaster":
                image = Images.RayBanClubmaster;
                break;
            case "Ray-Ban Round":
                image = Images.RayBanRound;
                break;
            case "Ray-Ban RB3594":
                image = Images.RayBanRB3594;
                break;
            case "Ray-Ban Aviator":
                image = Images.RayBanAviator;
                break;
        }
        return image;
    }

    const productQuantityCount = (): number => {
        let count: number = 0;
        product.details.forEach(detail => count += detail.quantity);
        return count;
    }

    const productPriceCheck = (): string => {
        return product.salePrice ? `${product.price} - ${product.salePrice}` : `${product.price}`;
    }

    const findDetail = (ID: number): IProductDetail => {
        const detail = product.details.find((detail) => detail.ID === ID);
        return detail ? detail : initialProductDetail;
    }

    const selectProductDetail = (detail: IProductDetail) => {
        const productCart: IProductCart = {
            name: product.name,
            price: product.salePrice ? product.salePrice : product.price,
            productID: product.ID,
            sku: product.sku,
            quantity: detail.quantity,
            productDetailID: detail.ID,
            size: detail.size,
        };

        setDetailSelected(productCart);
    }

    const addToCart = () => {
        if (detailSelected.quantity !== 0) {
            store.dispatch(addCart(detailSelected));
            store.dispatch(removeProduct(detailSelected));
            setDetailSelected({ ...detailSelected, quantity: detailSelected.quantity - 1 });
        }
    }

    return (
        <div className="col-2 py-3">
            <div className="border border-dark rounded bg-white">
                <div>
                    <img className="rounded" src={selectImage()} alt="" style={{ width: "100%", height: "120px" }} />
                </div>
                <div className="p-2 border-top border-dark">
                    <p className="fw-bold fs-5 m-0">{product.name}</p>
                    <p>{product.sku}</p>
                    <p>{`Qty: ${productQuantityCount()}`}</p>
                    <p>{`Price: ${productPriceCheck()}`}</p>
                    <div className="row m-0">
                        {product.details.length > 1 && <select className="col-auto" onChange={(e) => selectProductDetail(findDetail(Number(e.target.value)))}>
                            <option value="default" hidden>
                                Select size
                            </option>
                            {product.details.map((detail, index) => {
                                return <option value={detail.ID} key={index}>
                                    {`${detail.size} (${detail.quantity} pcs)`}
                                </option>
                            })}
                        </select>}
                        <button disabled={detailSelected.quantity === 0} className="col-auto ms-auto" style={{ height: "25px" }} onClick={() => addToCart()}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}