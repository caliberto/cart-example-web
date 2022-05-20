import styled from "styled-components";

export const RelativeContainer = styled.div`
    position: relative;
    height: 0;
    width: 0;
`;

export const Badge = styled.div`
    position: relative;
    top: -10px;
    left: -10px;
    width: 35px;
    height: 35px;
    background-color: ${({theme: { text : {color : {alert}} }}) => alert };
    color: white;
    border-radius: 50%;
    border: 1px solid ${({ theme: { text: { color: { secondary } } } }) => secondary};
    font-size: ${({theme: { fontSize }}) => fontSize[12]};
    text-align: center;
    padding-top: 7px;
    font-weight: bold;
`;