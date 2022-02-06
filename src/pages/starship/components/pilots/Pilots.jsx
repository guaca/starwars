/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledH2, StyledUl, StyledLi } from '../../../../application/general-styles';

const Pilots = ({ pilots }) => {
    const [pilotsData, setPilotsData] = useState([]);
    let data = [];

    useEffect(() => {
        const getPilotsData = async () => {
            for (const pilot of pilots) {
                await axios
                    .get(pilot)
                    .then(res => {
                        data.push(res.data);
                    })
            }
            setPilotsData([...data]);
        }
        getPilotsData();
    }, []);

    return (
        <div>
            <StyledH2>Pilots</StyledH2>
            {pilotsData.map((pilot, index) => (
                <StyledUl key={index}>
                    <StyledLi>
                        <h3>{pilot.name}</h3>
                    </StyledLi>
                    <StyledLi>
                        Gender: {pilot.gender}
                    </StyledLi>
                    <StyledLi>
                        Birth year: {pilot.birth_year}
                    </StyledLi>
                    <StyledLi>
                        Height: {pilot.height} cm
                    </StyledLi>
                    <StyledLi>
                        Mass: {pilot.mass} kg
                    </StyledLi>
                    <StyledLi>
                        Hair color: {pilot.hair_color}
                    </StyledLi>
                    <StyledLi>
                        Skin color: {pilot.skin_color}
                    </StyledLi>
                    <StyledLi>
                        Eye color: {pilot.eye_color}
                    </StyledLi>
                </StyledUl>
            ))}
        </div>
    )
}

export default Pilots;