import React from 'react';
import styled from 'styled-components';
// import ScaledImage from './../ScaledImage';
// import contentJson from '../../content/home.json';
import './../../index.css';

const VerticleImageText = ({
  title3,
  title2,
  image ,
  imageSide,
  imageHover = image,
  imageHeight = 300,
  imageWidth = imageHeight,
}) => {

  const PlacedContainer = styled.div`
      align-self:center;
      // flex: 1,
      display: flex;
      align-items: center;
      flex-flow: ${imageSide === 'down' ? 'column-reverse' : 'column'},
      flex-wrap: wrap;
      margin: 1rem 0rem 0rem 0rem;
    
    .subContainer{
      flex:1;
      justify-content: center;
      align-items: center;
    }

    .sectionImage{
      margin-left: 0.7rem;
      margin-right: 0.7rem;
      // background: url(${image}) no-repeat;
      // background-position: center;
      // background-size: ${imageHeight};
    }
    // .sectionImage:hover{
    //   margin:1rem;
    //   background: url(${imageHover}) no-repeat;
    //   background-position: center;
    //   background-size: ${imageHeight}
    // }
    .text{
      color: #1D1D1D;
      font-size: 16px;
      margin-top:0.625rem;
      // font-family: roboto;
      font-family: Roboto-Regular;
    }
    .header{
      color: #1D1D1D;
      align-items: center;
      align-self: center;
      justify-content: center;
      font-size: 1.375rem;
      font-family: Roboto-Medium;
    }
`


  return (
    <PlacedContainer>
      <div>
        <center>
          <img className="sectionImage"
          height={imageHeight}
          width={imageWidth}
          src = {image}
          />
          <div className="subContainer">
            {title2 ? <p className="header">{title2}</p> : null}
            <span className="text">{title3}</span>
          </div>
        </center>
      </div>
    </PlacedContainer>
  );
};

    
export default VerticleImageText;