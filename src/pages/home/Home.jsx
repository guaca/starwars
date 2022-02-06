import React from 'react';
import { StyledLink, StyledContainer } from '../../application/general-styles';
import '../../index.css';
import { StyledText } from './Home.styled';

const Home = () => {
    return (
        <>
            <StyledContainer>
                <StyledText>
                    It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armoured space station with enough power to destroy an entire planet.
                </StyledText>
                <StyledText>
                    Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy….
                </StyledText>
                <StyledText>
                    Here you will find all the available starships, both from the Empire and the Rebels.
                </StyledText>
                <StyledLink to="/starships">Discover starships</StyledLink>
            </StyledContainer>
        </>
    );
}

export default Home;
