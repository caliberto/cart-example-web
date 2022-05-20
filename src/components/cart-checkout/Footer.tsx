import { Button } from "components/commons";
import { useNavigate } from "react-router-dom";

export function Footer(): JSX.Element {
    let navigate = useNavigate();

    return (
        <div className="border-top border-dark row m-0 py-4 px-4 align-items-center">
            <div className="col-auto ms-auto">
                <Button onClick={() => navigate("/", { replace: true })} variant="primary">Buy more</Button>
            </div>
        </div>
    );
}