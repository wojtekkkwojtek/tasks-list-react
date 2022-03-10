import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    padding: 10px;
    background: teal;
    color: white;
    border: none;
    transition: 0.7s;
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.2); 
    }

    &:active {
        filter: brightness(120%);
    }
`;