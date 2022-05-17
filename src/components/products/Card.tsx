import { IProduct } from "models/products"

interface CardProps {
    product: IProduct
}

export function Card({ product }: CardProps): JSX.Element {
    return (
        <div className="col-2 py-3">
            <div className="border bg-white">
                <p>{product.name}</p>
            </div>
        </div>
    )
}