import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 12px 0;
    background: white;
    box-shadow: 0 0 10px #ddd;
`;

export const Header = styled.header`
    border-bottom: 1px solid #ddd;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Body = styled.div`
    padding: 15px;
`;

export const Title = styled.h2`
    font-size: 1.3em;
    margin: 0;

    @media (max-width: 767px) {
        font-size: 1.1em;
    }
`;