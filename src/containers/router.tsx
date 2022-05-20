import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { Cart, CartCheckout, Products } from "pages";
import { useAppSelector } from "app/hooks";
import { countCartItems } from "features/cart/cartSlice";

export function AppRouter() {
    const count = useAppSelector(countCartItems);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/cart">
                    <Route index element={count > 0 ? <Cart /> : <Navigate to="/" replace />} />
                    <Route path="checkout/:count" element={<CartCheckout />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes >
        </BrowserRouter >
    );
}