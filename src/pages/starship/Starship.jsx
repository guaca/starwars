/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { StyledLink } from '../../application/general-styles';
import Modal from '../../components/modal';
import Pilots from './components/pilots/Pilots';
import Films from './components/films/Films';
import {
    StyledContainer,
    StyledDetails,
    StyledImage,
    StyledInfo,
    StyledH1,
    StyledButton
} from './Starship.styled';
import { Helmet } from 'react-helmet';

const Starship = () => {
    const { id } = useParams();
    const [starship, setStarship] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [pilots, setPilots] = useState('');
    const [films, setFilms] = useState('');
    const [hasPilots, setHasPilots] = useState(false);
    const [showPilots, setShowPilots] = useState(false);
    const [showFilms, setShowFilms] = useState(false);
    const [component, setComponent] = useState('');

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/starships/${id}`)
            .then(response => {
                setStarship(response.data);
                setPilots(response.data.pilots);
                setFilms(response.data.films);
                response.data.pilots.length > 0
                    ? setHasPilots(true)
                    : setHasPilots(false)
            });
    }, []);

    useEffect(() => {
        axios
            .get(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)
            .then(response => {
                setImageUrl(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);
            })
            .catch((error) => {
                setImageUrl('https://starwars-visualguide.com/assets/img/big-placeholder.jpg');
            });
    });

    const handleClose = (e) => {
        e.preventDefault();
        setShowPilots(false);
        setShowFilms(false);
    };

    const handleShowPilots = (e) => {
        e.preventDefault();
        setShowPilots(true);
        setComponent(<Pilots pilots={pilots} />);
    }

    const handleShowFilms = (e) => {
        e.preventDefault();
        setShowFilms(true);
        setComponent(<Films films={films} />);
    }

    return (
        <>
            <Helmet>
                <title>{`${starship.name} - Star Wars API Site`}</title>
                <meta name="description" content={`Explore all the ${starship.name} details, manufactured by ${starship.manufacturer} and with a cargo capacity of ${starship.cargo_capacity} kg.`} />
            </Helmet>  
            <StyledContainer>
                <StyledImage src={imageUrl} alt={starship.name} />
                <StyledInfo>
                    <StyledH1>{starship.name}</StyledH1>
                    <StyledDetails>
                        <p>Model: {starship.model}</p>
                        <p>Manufacturer: {starship.manufacturer}</p>
                        <p>Cost in credits: {starship.cost_in_credits}</p>
                        <p>Length: {starship.length}m</p>
                        <p>Atmospheric Speed: {starship.max_atmosphering_speed}</p>
                        <p>Crew: {starship.crew}</p>
                        <p>Passengers: {starship.passengers}</p>
                        <p>Cargo Capacity: {starship.cargo_capacity}</p>
                        <p>Films: <StyledButton onClick={handleShowFilms}>Show films</StyledButton></p>
                        {hasPilots && <p>Pilots: <StyledButton onClick={handleShowPilots}>Show pilots</StyledButton></p>}
                    </StyledDetails>
                </StyledInfo>
            </StyledContainer>
            {showPilots && <Modal onClose={handleClose}>{component}</Modal>}
            {showFilms && <Modal onClose={handleClose}>{component}</Modal>}
            <StyledLink to="/starships">Back to Starships</StyledLink>
        </>
    );
};

export default Starship;