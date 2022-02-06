import styled from 'styled-components';

export const StyledContainer = styled.div`
    background-color: #333;
    color: #BBB;
    margin: 0 auto;
    margin-bottom: 24px;
    padding-bottom: 24px;
    width: min(80%, 800px);
`;

export const StyledImage = styled.img`
    border-bottom: 1px solid #ebd800;
    width: 100%;
`;

export const StyledInfo = styled.div`
    padding: 12px 24px;
`;

export const StyledDetails = styled.div`
    display: grid;
    grid-template-columns: 100%;
    @media (min-width: 768px) {
        grid-template-columns: 50% 50%;
    }
`;

export const StyledH1 = styled.h1`
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
`;

export const StyledButton = styled.button`
    padding: 5px 10px;
    margin-left: 10px;
    background-color: #BBB;
    color: #222;
    border: 1px solid #222;
    border-radius: 5px;
    text-transform: uppercase;
    &:hover {
        color: #ebd800;
    }
`;