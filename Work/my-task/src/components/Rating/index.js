import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import VerticleImageText from '../VerticleImageText';
import styled from 'styled-components';
const Rating = () => {

    const RatingContainer = styled.div`
        
        .rate{
            
        }

        .container{
            display: flex;
            flex : 1;
            flex-wrap : wrap;
            flex-direction : row;
            justify-content : center;
        },
        .text{
            flex: 1;
            align-self: center;
            justify-content: center;
            font-size: 24px;
            margin-top:32px;
        }
    `

    return(
        <RatingContainer>
            <center>
                <span className="text"> How was your experience</span>
            </center>
            <div className="container">
                <VerticleImageText title3="worse" image={require("./../../assets/smile.png")} imageHeight={'55px'} />
                <VerticleImageText title3="bad" className="rate" image= {require("./../../assets/bad.svg")} imageHover={require("./../../assets/bad_hover.svg")} imageHeight={'55px'} />
                <VerticleImageText title3="fine" image={require("./../../assets/smile.png")} imageHeight={50} />
                <VerticleImageText title3="good" image={require("./../../assets/smile.png")} imageHeight={50} />
                <VerticleImageText title3="great" image={require("./../../assets/smile.png")} imageHeight={50} />
            </div>
        </RatingContainer>
    )
}

export default Rating;