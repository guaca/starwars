import styled from 'styled-components';

export const StyledText = styled.p`
    color: #BBB;
    font-size: 24px;
    margin: 0 auto 36px auto;
    width: min(80%, 800px);
    @media(min-width: 768px) {
        font-size: 36px;
    }
`;