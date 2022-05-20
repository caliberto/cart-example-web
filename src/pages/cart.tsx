import { Default } from "template";
import { CartComp } from "components";
import { Header } from "components/commons";

export function Cart() {
    return (
        <Default
            header={<Header titleText="CART" title counter/>}
            body={<CartComp.Body/>}
            footer={<CartComp.Footer/>}
        />
    )
}