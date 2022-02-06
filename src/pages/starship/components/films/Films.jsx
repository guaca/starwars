/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledH2, StyledUl, StyledLi } from '../../../../application/general-styles';

const Films = ({ films }) => {
    const [filmsData, setFilmsData] = useState([]);
    let data = [];

    useEffect(() => {
        const getFilmsData = async () => {
            for (const film of films) {
                await axios
                    .get(film)
                    .then(response => {
                        data.push(response.data);
                    })
            }
            setFilmsData([...data]);
        }
        getFilmsData();
    }, []);

    return (
        <div>
            <StyledH2>Films</StyledH2>
            {filmsData.map((film, index) => (
                <StyledUl key={index}>
                    <StyledLi>
                        <h3>{film.title}</h3>
                    </StyledLi>
                    <StyledLi>
                        Episode {film.episode_id}
                    </StyledLi>
                    <StyledLi>
                        Director: {film.director}
                    </StyledLi>
                    <StyledLi>
                        Release date: {new Date(film.release_date).toDateString()}
                    </StyledLi>
                    <StyledLi>
                        {film.opening_crawl}
                    </StyledLi>
                </StyledUl>
            ))}
        </div>
    )
}

export default Films;