import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledUl = styled.ul`
    align-items: center;
    background-color: #222;
    border: 1px solid #333;
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 15px 0;
    padding: 0;
`;

export const StyledLi = styled.li`
    border-left: 1px solid #333;
    border-right: 1px solid #333;
    height: 100%;
    padding: 8px 24px;
`;

export const StyledLogo = styled.div`
    background-image: url('/sw-logo.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100px;
`;

export const StyledLink = styled(Link)`
    color: #BBB;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
        color: #FFF;
    }
`;

export const StyledHeader = styled.header`
    padding: 0;
    @media(min-width: 625px) {
        padding: 15px 0;
    }
`;