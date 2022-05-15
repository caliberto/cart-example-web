import { Default } from "template";
import { ProductsComp } from "components"

export function Products() {
    return (
        <Default
            header={<ProductsComp.Header/>}
            body={<ProductsComp.Body/>}
            footer={<ProductsComp.Footer/>}
        />
    )
}