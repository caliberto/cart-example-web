interface DefaultProps {
    header: JSX.Element;
    body: JSX.Element;
    footer: JSX.Element;
}

export function Default({ header, body, footer }: DefaultProps) {
    return (
        <div className="default-template">
            <div className="d-flex flex-column vh-100">
                <div style={{ backgroundColor: "#f1f1f1" }}>
                    {header}
                </div>
                <div className="flex-grow-1 py-3" style={{ backgroundColor: "#f1f1f1" }}>
                    {body}
                </div>
                <div>
                    {footer}
                </div>
            </div>
        </div>
    );
}