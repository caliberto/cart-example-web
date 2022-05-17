import { IProduct, IProductDetail } from "models/products"
import * as Images from "images";
import { useState } from "react";

interface CardProps {
    product: IProduct
}

export function Card({ product }: CardProps): JSX.Element {
    const [detailSelected, setDetailSelected] = useState(null);
    
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
        return image
    }

    const selectDetail = (detail : IProductDetail) => {
        
    }

    return (
        <div className="col-2 py-3">
            <div className="border bg-white">
                <img src={selectImage()} alt="" style={{ width: "100%", height: "150px" }} />
                <p>{product.name}</p>
                <p>{product.sku}</p>
                <select disabled={!(product.details.length > 0)} onChange={selectDetail}>
                    <option value="default" hidden>
                        Select a size
                    </option>
                    {product.details.map((detail) => {
                        return <option onClick={selectDetail(detail)}>
                            {detail.size}
                        </option>
                    })}
                </select>
            </div>
        </div>
    )
}