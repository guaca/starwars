import React from 'react';
import { Link } from 'react-router-dom';
import {
    StyledHeader,
    StyledLink,
    StyledLogo,
    StyledUl,
    StyledLi
} from './Header.styled'


const Header = () => {
    return (
        <StyledHeader>
            <nav>
                <Link to='/'><StyledLogo data-testid='background-logo' /></Link>
            </nav>
            <nav>
                <StyledUl>
                    <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
                    <StyledLi><StyledLink to="/starships">Starships</StyledLink></StyledLi>
                </StyledUl>
            </nav>
        </StyledHeader>
    );
}

export default Header;