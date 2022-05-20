import { useAppSelector } from "app/hooks";
import { totalPieces, totalPrice } from "features/cart/cartSlice";

export function Counter() {
    const pieces = useAppSelector(totalPieces);
    const price = useAppSelector(totalPrice);

    return (
        <div className="row m-0">
                <div className="col-auto ms-auto">
                    <div className="row m-0">
                        <span className="col-auto">{"Total pieces: "}</span>
                        <span className="col-auto ms-auto">{pieces}</span>
                    </div>
                    <div className="row m-0">
                        <span className="col-auto">{"Total price: "}</span>
                        <span className="col-auto ms-auto">{price}</span>
                    </div>
                </div>
            </div>
    )
}