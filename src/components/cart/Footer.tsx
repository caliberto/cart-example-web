import { useAppSelector } from "app/hooks";
import { store } from "app/store";
import { Button } from "components/commons";
import { buyCartAsync, countCartItems } from "features/cart/cartSlice";
import { updateProducts } from "features/product/productsSlice";
import { IProduct } from "models/products";
import { useNavigate } from "react-router-dom";
import {ArrowCircleLeftOutlined} from '@mui/icons-material';

export function Footer(): JSX.Element {
    const cart = useAppSelector(state => state.cart.items);
    const count = useAppSelector(countCartItems);
    let navigate = useNavigate();

    const buyProducts = async () => {
        const response = await store.dispatch(buyCartAsync(cart));
        store.dispatch(updateProducts(response.payload as IProduct[]))
        navigate(`checkout/${count}`, { replace: true })
    }

    return (
        <div className="border-top border-dark row m-0 py-4 px-4 align-items-center">
            <div className="col-auto">
                <div onClick={() => navigate(-1)} role="button"><ArrowCircleLeftOutlined className="me-2 mb-1"/>Go back</div>
            </div>
            <div className="col-auto ms-auto">
                {`${count} products added`}
            </div>
            <div className="col-auto">
                <Button onClick={() => buyProducts()} variant="primary">Checkout</Button>
            </div>
        </div>
    );
}