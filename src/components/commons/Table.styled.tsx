import styled from "styled-components";

export const Table = styled.table`
    &>thead>tr {
        height: 55px;
    }

    &>thead>tr>td {
        border-right: 1px solid ${({ theme: { text: { color: { secondary } } } }) => secondary};
    }

    &>tbody>tr {
        height: 55px;
        border-top: 1px solid ${({ theme: { text: { color: { secondary } } } }) => secondary};
    }

    &>thead>tr>th {
        border-right: 1px solid ${({ theme: { text: { color: { secondary } } } }) => secondary};
        color: ${({ theme: { text: { color: { secondary } } } }) => secondary};
    }

    &>thead>tr>th:last-of-type {
        border-right: none
    }

    &>tbody>tr>td {
        border-right: 1px solid ${({ theme: { text: { color: { secondary } } } }) => secondary};
    }

    &>tbody>tr>td:last-of-type {
        border-right: none
    }
`;