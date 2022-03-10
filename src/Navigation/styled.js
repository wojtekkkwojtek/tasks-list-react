import styled from "styled-components";
import {NavLink} from "react-router-dom";

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    color: white;
    text-decoration: none;

    &.${activeClassName} {
        font-weight: bold;
    }

    &:hover{
        text-decoration: underline;
    }
`;

export const List = styled.ul`
    background: #0485b0;
    margin: 5px auto;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;
    max-width: 800px;
`;

export const Item = styled.li`
    margin: 20px;
`;