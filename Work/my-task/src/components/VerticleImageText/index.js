import React from 'react';
import styled from 'styled-components';
// import ScaledImage from './../ScaledImage';
// import contentJson from '../../content/home.json';

const VerticleImageText = ({
  title3,
  title2,
  image ,
  imageSide,
  imageHover = image,
  imageHeight = 300,
}) => {

  const PlacedContainer = styled.div`
      align-self:center;
      // flex: 1,
      display: flex;
      align-items: center;
      flex-flow: ${imageSide === 'down' ? 'column-reverse' : 'column'},
      flex-wrap: wrap;
      margin: 1em 0em 0em 0em;
    
    .subContainer{
      flex:1;
      justify-content: center;
      align-items: center;
    }

    .sectionImage{
      margin:16px;
      background: url(${image}) no-repeat;
      background-position: center;
      background-size: ${imageHeight};
    }
    .sectionImage:hover{
      margin:16px;
      background: url(${imageHover}) no-repeat;
      background-position: center;
      background-size: ${imageHeight}
    }
    .text{
      color: #103B81;
      font-size: 14
      margin-top:10px;
    }
    .header{
      color: #103B81;
      align-items: center;
      align-self: center;
      justify-content: center;
      font-size: 20px;
    }
`


  return (
    <PlacedContainer>
      <div>
        <center>
          <img className="sectionImage"
          height={imageHeight}
          width={imageHeight}
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