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
            font-size: 20px;
            margin-top:32px;
        }
    `

    return(
        <RatingContainer>
            <center>
                <span className="text"> How was your buying experience?</span>
            </center>
            <div className="container">
                <VerticleImageText title3="Worse" image={require("./../../assets/bad.svg")} imageHeight={'55px'} />
                <VerticleImageText title3="Bad" className="rate" image= {require("./../../assets/bad.svg")} imageHover={require("./../../assets/bad_hover.svg")} imageHeight={'55px'} />
                <VerticleImageText title3="Fine" image={require("./../../assets/bad.svg")} imageHeight={50} />
                <VerticleImageText title3="Good" image={require("./../../assets/bad.svg")} imageHeight={50} />
                <VerticleImageText title3="Great" image={require("./../../assets/great.svg")} imageHeight={50} />
            </div>
        </RatingContainer>
    )
}

export default Rating;