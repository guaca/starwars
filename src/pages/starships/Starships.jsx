/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    StyledButton,
    StyledContainer,
    StyledButtonContainer
} from '../../application/general-styles';
import {
    StyledLi,
    StyledLink,
    StyledDiv,
    StyledUl
} from './Starships.styled';

const Starships = () => {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [buttonState, setButtonState] = useState(false);

    const getApiData = () => {
        axios
            .get(`https://swapi.dev/api/starships/?page=${page}`)
            .then(response => {
                setList([...list, ...response.data.results]);
                setPage(page + 1);
            })
            .catch(error => {
                setButtonState(true);
                console.log(error);
            });
    };

    useEffect(() => {
        getApiData();
    }, []);

    const viewMoreHandler = () => {
        getApiData();
    };

    const getId = (url) => {
        return url.split('/').at(-2);
    };

    return (
        <StyledContainer>
            <StyledUl>
                {list.map((item, index) =>
                    <StyledLi key={index}>
                        <StyledLink to={getId(item.url)}>{item.name}</StyledLink>
                        <StyledDiv>{item.model}</StyledDiv>
                    </StyledLi>
                )}
            </StyledUl>
            <StyledButtonContainer>
                <StyledButton
                    onClick={viewMoreHandler}
                    disabled={buttonState}
                >View More
                </StyledButton>
            </StyledButtonContainer>
        </StyledContainer>
    );
}

export default Starships;