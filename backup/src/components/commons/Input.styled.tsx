import styled, { css } from "styled-components";

export const Select = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 0 10px;
    border-radius: 5px;
    outline: none;

    ${({ theme: { fontSize } }) => css`
        font-size: ${fontSize[10]};
    `}
`;