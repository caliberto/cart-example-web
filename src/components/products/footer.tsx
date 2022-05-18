import { useAppSelector } from "app/hooks";
import { countCartItems } from "features/cart/cartSlice";

export function Footer(): JSX.Element {
    const count = useAppSelector(countCartItems);

    return (
        <div className="border-top border-dark row m-0 py-4">
            <div className="col-auto ms-auto">
                {`${count} products added`}
            </div>
        </div>
    );
}