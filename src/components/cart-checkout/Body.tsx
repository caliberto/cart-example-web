import { Button, Text } from "components/commons";
import { useNavigate, useParams } from "react-router-dom";

export function Body(): JSX.Element {
    const navigate = useNavigate();
    const params = useParams();

    return (
        <div className="mx-5 bg-white border border-dark rounded h-100 px-4 pt-4 pb-5 align-items-center row">
            <div>
                <div className="text-center mb-4">
                    <Text variant="title-xl">Thank you!</Text>
                </div>
                <div className="text-center mb-4">
                    <Text variant="title-xl"> Your {params.count} {Number(params.count) > 1 ? "products" : "product"} will be shipped soon</Text>
                </div>
                <div className="text-center">
                    <Button onClick={() => navigate("/", { replace: true })} variant="primary">Buy more</Button>
                </div>
            </div>
        </div>
    );
}