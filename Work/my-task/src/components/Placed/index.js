import React from 'react';
import VerticleImageSection from '../VerticleImageText';
import styled from 'styled-components';

const Placed = () => {
    const PlacedContainer = styled.div `
    .containerWeb{
        display: flex;
        flex:1;
        width: 100%;
        background: url(${require("./../../assets/banner_bg@2x.png")});
        justify-content : center;
        align-items:center;
        padding-bottom: 14px;
        padding-top: 10px;
        @media (max-width: 599px){
            display: none;
        }
    }
    .containerMobile{
        display: none;
        @media (max-width: 599px){
            margin-top: 30px;
            display: block;
            display: flex;
            flex:1;
            justify-content : center;
            align-items:center;
            width: 100%;
        }
    }
    
    }
    `

    const PlacedContainerMob = styled.div`

    `
    return(
        <PlacedContainer>
            <div className="containerWeb">
                <VerticleImageSection 
                    title2="Thank You"
                    title3= "Your order (Order ID : 123456) has been placed successfully." 
                    image={require("./../../assets/checkmark (1)@2x.png")} 
                    imageHeight={'60px'}
                    imageWidth={'68px'} />
            </div>
            <div className="containerMobile">
                <center>
                    <VerticleImageSection 
                        title2="Order Placed"
                        image={require("./../../assets/checkmark (1)@2x.png")} 
                        imageWidth={'40px'}
                        imageHeight={'37px'} />
                </center>
            </div>
        </PlacedContainer>
    )
};

export default Placed;