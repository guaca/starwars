import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledWrapper = styled.div`
    background-image: url('/background-mobile.jpg');
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    @media (min-width: 768px) {
        background-image: url('/background-desktop.jpg')
    }
`;

export const StyledButton = styled.button`
    background-color: #282727;
    border: 1px solid #ebd800;
    border-radius: 5px;
    color: #ebd800;
    font-size: 16px;
    font-weight: 800;
    margin: 0 auto;
    padding: 10px;
    text-transform: uppercase;
    width: 200px;
    &:disabled {
        background-color: #BBB;
        color: #DDD;
    }
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    background-color: #282727;
    border: 1px solid #ebd800;
    border-radius: 5px;
    color: #ebd800;
    display: flex;
    justify-content: center;
    margin: 0 auto 48px auto;
    padding: 10px;
    text-decoration: none;
    text-transform: uppercase;
    width: 200px;
    &:hover {
        color: #ebd800;
    }
`;

export const StyledContainer = styled.div`
    flex-grow: 1;
`;

export const StyledError = styled.p`
    color: #ebd800;
    font-size: 24px;
    text-align: center;
`;

export const StyledUl = styled.ul`
    border-bottom: 1px solid rgba(187, 187, 187, 0.6);
    list-style: none;
    padding: 0 40px 10px 40px;
`;

export const StyledH2 = styled.h2`
    border-bottom: 1px solid rgba(187, 187, 187, 0.6);
    padding: 0 40px 10px 40px;
    text-transform: uppercase;
`;

export const StyledLi = styled.li`
    margin-bottom: 8px;
`;