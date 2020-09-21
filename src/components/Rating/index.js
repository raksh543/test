import React, {useState} from 'react';
import VerticleImageText from '../VerticleImageText';
import styled from 'styled-components';
const Rating = () => {

    const [isHoverOne, setIsHoverOne] = useState("blank");
    const [isHoverTwo, setIsHoverTwo] = useState("blank");
    const [isHoverThree, setIsHoverThree] = useState("blank");
    const [isHoverFour, setIsHoverFour] = useState("blank");
    const [isHoverFive, setIsHoverFive] = useState("blank");

    const RatingContainer = styled.div`
    padding-bottom: 16px;
    padding-top: 16px;
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
        }
    `

    return(
        <RatingContainer>
            <center>
                <span className="text"> How was your buying experience?</span>
            </center>
            <div className="container">
                <div onMouseOver={()=>setIsHoverOne("fill")} onMouseOut={()=>setIsHoverOne("blank")} style={{padding:0}}>
                <VerticleImageText 
                    title3="Terrible" 
                    image={require("./../../assets/Terrible_"+isHoverOne+"@2x.png")} 
                    imageHeight={50} 
                    onClick={()=>console.log("yes")}
                />
                </div>
                <div onMouseOver={()=>setIsHoverTwo("fill")} onMouseOut={()=>setIsHoverTwo("blank")} style={{padding:0}}>
                <VerticleImageText title3="Bad" className="rate" image= {require("./../../assets/bad_"+isHoverTwo+"@2x.png")} imageHover={require("./../../assets/bad_hover.svg")} imageHeight={50} />
                </div>
                <div onMouseOver={()=>setIsHoverThree("fill")} onMouseOut={()=>setIsHoverThree("blank")} style={{padding:0}}>                
                <VerticleImageText title3="Ok" image={require("./../../assets/ok_"+isHoverThree+"@2x.png")} imageHeight={50} />
                </div>
                <div onMouseOver={()=>setIsHoverFour("fill")} onMouseOut={()=>setIsHoverFour("blank")} style={{padding:0}}>
                <VerticleImageText title3="Good" image={require("./../../assets/good_"+isHoverFour+"@2x.png")} imageHeight={50} />
                </div>
                <div onMouseOver={()=>setIsHoverFive("fill")} onMouseOut={()=>setIsHoverFive("blank")} style={{padding:0}}>
                <VerticleImageText title3="Great" image={require("./../../assets/great_"+isHoverFive+"@2x.png")} imageHeight={50} />
                </div>
            </div>
        </RatingContainer>
    )
}

export default Rating;