import { useAppSelector } from "app/hooks";
import { Card } from "./Card";

export function Body(): JSX.Element {
    const products = useAppSelector(state => state.products.items);

    return (
        <div className="mx-5 row m-0">

            {products.map((product, index) => <Card key={index} product={product} />)}

        </div>
    );
}