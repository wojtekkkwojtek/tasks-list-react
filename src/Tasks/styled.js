import styled, {css} from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    word-break: break-word;

    ${({hidden}) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({done}) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    background-color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background-color 0.5s;
    cursor: pointer;

    ${({toggleDone}) => toggleDone && css`
        background-color: rgb(0, 128, 64);

        &:hover {
            background-color: rgb(1, 95, 48);
        }

        &:active {
            background-color: rgb(2, 49, 25);
        }
    `}

    ${({remove}) => remove && css`
        background-color: rgb(199, 3, 3);

        &:hover {
            background-color: rgb(138, 3, 3);
        }

        &:active {
            background-color: rgb(80, 1, 1);
        }
    `}
`;