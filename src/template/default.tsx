import { Text } from "components/commons";

interface DefaultProps {
    header: JSX.Element;
    body: JSX.Element;
    footer: JSX.Element;
}

export function Default({ header, body, footer }: DefaultProps) {
    return (
        <div className="default-template">
            <div className="d-flex flex-column vh-100">
                <div className="bg-screen text-center pt-5">
                    <Text variant="title-logo">STORE LOGO</Text>
                </div>
                <div className="bg-screen">
                    {header}
                </div>
                <div className="flex-grow-1 py-3 bg-screen">
                    {body}
                </div>
                <div>
                    {footer}
                </div>
            </div>
        </div>
    );
}