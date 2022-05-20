import styled, { css } from "styled-components";

interface IProps {
    variant: "primary" | "primary-disabled" | "primary-mini" | "primary-mini-disabled" | "primary-mini-op-disabled";
}

export const Button = styled.button<IProps>`
    border: none;
    outline: none;
    color: white;

    ${({ variant = "", theme: { button: { primary }, fontSize } }) => variant === "primary" && css`
        background-color: ${primary.backgroundColor.default};
        padding: 10px 25px;
        border-radius: 10px;
        font-size: ${fontSize[12]};
    `}

    ${({ variant = "", theme: { button: { primary }, fontSize } }) => variant === "primary-disabled" && css`
        background-color: ${primary.backgroundColor.disabled};
        padding: 10px 25px;
        border-radius: 10px;
        font-size: ${fontSize[12]};
    `}

    ${({ variant = "", theme: { button: { primary }, fontSize } }) => variant === "primary-mini" && css`
        background-color: ${primary.backgroundColor.default};
        padding: 5px 20px;
        border-radius: 5px;
        font-size: ${fontSize[10]};
    `}

    ${({ variant = "", theme: { button: { primary }, fontSize } }) => variant === "primary-mini-disabled" && css`
        background-color: ${primary.backgroundColor.disabled};
        padding: 5px 20px;
        border-radius: 5px;
        font-size: ${fontSize[10]};
    `}

    ${({ variant = "", theme: { button: { primary }, fontSize } }) => variant === "primary-mini-op-disabled" && css`
        background-color: ${primary.backgroundColor.default};
        opacity: 0.5;
        padding: 5px 20px;
        border-radius: 5px;
        font-size: ${fontSize[10]};
    `}
`;

export const IconButton = styled.div<{variant : "remove" | "add" | "general"}>`
    color: ${({variant, theme: { button : { icon } }}) => icon[variant] };
    font-size: ${({theme: { fontSize }}) => fontSize[10]};
    font-weight: bold;
`;