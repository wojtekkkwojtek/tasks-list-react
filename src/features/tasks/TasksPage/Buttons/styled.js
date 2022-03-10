import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: medium;
`;

export const StyledButton = styled.button`
    background: transparent;
    color: #015c7a;
    border: none;
    margin: 10px 2px;
    transition: background-color 1.2s;
    cursor: pointer;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        filter: brightness(50%);
        transform: scale(1.1)
    }

    &:active {
        filter: brightness(25%);
    }

    &:disabled {
        color: #ccc;
        cursor: not-allowed;
    }
`;