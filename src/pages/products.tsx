import { Default } from "template";
import { ProductsComp } from "components";
import { Header } from "components/commons";

export function Products() {
    return (
        <Default
            header={<Header titleText="LAST PRODUCTS AVAILABLE" title counter />}
            body={<ProductsComp.Body />}
            footer={<ProductsComp.Footer />}
        />
    )
}