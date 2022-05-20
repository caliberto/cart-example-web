import styled, { css } from "styled-components";

interface IProps {
    variant: "title-logo" | "title-header" | "title-xl" | "title" | "subtitle" | "label" | "text" | "alert";
}

export const Text = styled.span<IProps>`
    ${({ variant = "", theme: { fontSize } }) => variant === "title-logo" && css`
        font-size: ${fontSize[40]};
        font-weight: bold;
        margin: 0;
    `}

    ${({ variant = "", theme: { fontSize } }) => variant === "title-header" && css`
        font-size: ${fontSize[28]};
        font-weight: bold;
        margin: 0;
    `}

    ${({ variant = "", theme: { fontSize } }) => variant === "title-xl" && css`
        font-size: ${fontSize[24]};
        font-weight: bold;
        margin: 0;
    `}

    ${({ variant = "", theme: { fontSize } }) => variant === "title" && css`
        font-size: ${fontSize[16]};
        font-weight: bold;
        margin: 0;
    `}

    ${({ variant = "", theme: { fontSize } }) => variant === "subtitle" && css`
        font-size: ${fontSize[12]};
        margin-bottom: 8px;
    `}

    ${({ variant = "", theme: { fontSize } }) => variant === "label" && css`
        font-size: ${fontSize[10]};
        margin-bottom: 8px;
    `}

    ${({ variant = "", theme: { fontSize } }) => variant === "text" && css`
        font-size: ${fontSize[10]};
        margin-bottom: 8px;
        font-weight: bold;
    `}

    ${({ variant = "", theme: { fontSize, text: { color: { alert } } } }) => variant === "alert" && css`
        font-size: ${fontSize[9]};
        color: ${alert};
        margin: 0;
    `}
`;