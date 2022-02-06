import styled from 'styled-components';

export const StyledModal = styled.div`
    background-color: rgba(200, 200, 200, 0.2);
    backdrop-filter: blur(2px);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`;

export const StyledModalContent = styled.div`
    background-color: rgba(34, 34, 34, 0.95);
    width: min(80%, 500px);
    padding: 16px;
    height: 70vh;
    margin: 15vh auto;
    color: #BBB;
    overflow-y: auto;
    border-radius: 10px;
`;

export const StyledModalButton = styled.button`
    background-color: transparent;
    border: 1px solid #ebd800;
    color: #ebd800;
    display: block;
    margin: 0 0 24px 0;
    padding: 8px;
    width: 32px;
`;
