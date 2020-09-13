import React from 'react';
import { View } from 'react-native';
import VerticleImageSection from '../VerticleImageText';
import styled from 'styled-components';

const Placed = () => {
    const PlacedContainer = styled.div `
    display: flex;
    flex:1;
    width: 100%;
    background: url(${require("./../../assets/banner_bg@2x.png")});
    justify-content : center;
    align-items:center;
    padding-bottom: 10px;
    `
    return(
        <PlacedContainer>
            <VerticleImageSection
                title2="ThankYou"
                title3= "Your order (Order ID : 123456) has been placed successfully." 
                image={require("./../../assets/checkmark (1)@2x.png")} 
                imageHeight={100} />
        </PlacedContainer>
    )
};

export default Placed;