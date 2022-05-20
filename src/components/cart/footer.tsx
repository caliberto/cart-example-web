import { useAppSelector } from "app/hooks";
import { Button } from "components/commons";
import { countCartItems } from "features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export function Footer(): JSX.Element {
    const count = useAppSelector(countCartItems);
    let navigate = useNavigate();

    return (
        <div className="border-top border-dark row m-0 py-4 align-items-center">
            <div className="col-auto">
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
            <div className="col-auto ms-auto">
                {`${count} products added`}
            </div>
            <div className="col-auto">
                <Button onClick={() => navigate(`checkout/${count}`, { replace: true })} variant="primary">Checkout</Button>
            </div>
        </div>
    );
}