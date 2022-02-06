import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLi = styled.li`
    background-color: #333;
    list-style: none;
    margin: 10px auto;
    padding: 10px;
    width: min(80%, 800px);
`;

export const StyledLink = styled(Link)`
    color: #BBB;
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
        color: #ebd800;
    }
`;

export const StyledDiv = styled.div`
    color: #BBB;
`;

export const StyledUl = styled.ul`
    padding-left: 0;
`;
