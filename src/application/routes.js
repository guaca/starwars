/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Starships from '../pages/starships';
import Starship from '../pages/starship';
import { StyledWrapper } from './general-styles';
import Header from '../components/header';
import Footer from '../components/footer';

export default () => {
    return (
        <BrowserRouter>
            <StyledWrapper>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/starships' element={<Starships />} />
                    <Route path='/starships/:id' element={<Starship />} />
                </Routes>
                <Footer />
            </StyledWrapper>
        </BrowserRouter>
    )
};