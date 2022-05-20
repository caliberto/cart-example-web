import { useAppSelector } from "app/hooks";
import { countProductsItems } from "features/product/productsSlice";
import { Text } from "./Text.styled";

interface PrimaryProps {
    titleText?: string;
    title?: boolean;
    counter?: boolean;
}

export default function Header({titleText, title, counter} : PrimaryProps) {
    const count = useAppSelector(countProductsItems);

    return (
        <div className="mx-5">
            <div className="d-flex border-bottom border-dark align-items-center">
                <Text variant="title-header" style={{visibility: !title ? "hidden" : "visible" }}>{titleText}</Text>
                {counter && <div className="fs-6 ms-auto">{`${count} products available`}</div>}
            </div>
        </div>
    );
}