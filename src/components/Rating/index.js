// content: url(${require("./../../assets/Wallet@2x.png")})
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
    padding-bottom: 1rem;
    padding-top: 1rem;
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
            font-size: 1.25rem;
        }
        .section{
            display: flex;
            flex-direction: column;
            height: 5.125rem;
            width: 4.825rem;
            justify-content: space-around;
            font-size: 1rem;
            align-items: center;
            margin: 1rem 0rem;
        }
        @media (max-width: 1467px) {
            .section img{
                width: 3rem;
                height: 3rem;
            }
            .section{
                width: 3.625rem
            }
        }
        .terrible{
            content: url(${require("./../../assets/Terrible_blank@2x.png")});
            width: 3.4375rem;
            height: 3.4375rem;
        }
        .terrible:hover{
            content: url(${require("./../../assets/Terrible_fill@2x.png")});
        }
        .bad{
            content: url(${require("./../../assets/bad_blank@2x.png")});
            width: 3.4375rem;
            height: 3.4375rem;
        }
        .bad:hover{
            content: url(${require("./../../assets/bad_fill@2x.png")});
        }
        .ok{
            content: url(${require("./../../assets/ok_blank@2x.png")});
            width: 3.4375rem;
            height: 3.4375rem;
        }
        .ok:hover{
            content: url(${require("./../../assets/ok_fill@2x.png")});
        }
        .good{
            content: url(${require("./../../assets/good_blank@2x.png")});
            width: 3.4375rem;
            height: 3.4375rem;
        }
        .good:hover{
            content: url(${require("./../../assets/good_fill@2x.png")});
        }
        .great{
            content: url(${require("./../../assets/great_blank@2x.png")});
            width: 3.4375rem;
            height: 3.4375rem;
        }
        .great:hover{
            content: url(${require("./../../assets/great_fill@2x.png")});
        }

    `

    return(
        <RatingContainer>
            <center>
                <span className="text"> How was your buying experience?</span>
            </center>
            <div className="container">
                <div className="section" >
                    <img className="terrible" />
                    <span>Terrible</span>
                </div>

                <div className="section" >
                    <img className="bad" />
                    <span>Bad</span>
                </div>

                <div className="section" >
                    <img className="ok" />
                    <span>Ok</span>
                </div>

                <div className="section" >
                    <img className="good" />
                    <span>Good</span>
                </div>

                <div className="section" >
                    <img className="great" />
                    <span>Great</span>
                </div>
                
                {/* <div onMouseOver={()=>setIsHoverOne("fill")} onMouseOut={()=>setIsHoverOne("blank")} style={{padding:0}}>
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
                </div> */}
            </div>
        </RatingContainer>
    )
}

export default Rating;