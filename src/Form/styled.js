import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
`;

export const Button = styled.button`
    padding: 10px;
    background: teal;
    color: white;
    border: none;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        background: rgb(0, 128, 90);
        transform: scale(1.3); 
    }

    &:active {
        background: rgb(0, 128, 43);
    }
`;