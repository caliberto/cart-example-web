import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Cart, Products } from "pages";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes >
        </BrowserRouter >
    );
}