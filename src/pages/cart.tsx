import { Default } from "template";
import { CartComp } from "components"

export function Cart() {
    return (
        <Default
            header={<CartComp.Header/>}
            body={<CartComp.Body/>}
            footer={<CartComp.Footer/>}
        />
    )
}