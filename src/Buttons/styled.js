import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: medium;
`;

export const Button = styled.button`
    background: transparent;
    color: teal;
    border: none;
    margin: 10px;
    transition: background-color 0.5s;
    cursor: pointer;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color: rgb(2, 73, 73);
    }

    &:active {
        color: rgb(1, 22, 22);
    }

    &:disabled {
        color: #ccc;
        cursor: not-allowed;
    }
`;