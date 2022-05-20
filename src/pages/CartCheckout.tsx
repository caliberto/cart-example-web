import { Default } from "template";
import { CartCheckoutComp } from "components";
import { Header } from "components/commons";

export function CartCheckout() {
    return (
        <Default
            header={<Header titleText="CHECKOUT"/>}
            body={<CartCheckoutComp.Body />}
            footer={<CartCheckoutComp.Footer />}
        />
    )
}