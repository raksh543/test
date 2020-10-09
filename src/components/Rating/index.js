// content: url(${require("./../../assets/Wallet@2x.png")})
import React, { useState } from 'react';
import VerticleImageText from '../VerticleImageText';
import styled from 'styled-components';
import './../../index.css';
import Popup from './Popup';

const Rating = () => {

    const [open, setOpen] = useState(false);

    const RatingContainer = styled.div`
    padding-bottom: 1rem;
    font-family: Roboto-Regular;

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
            font-size: 1.125rem;
            color: #5C5C5C;
        }
        .container span{
            color: #1D1D1D;
            font-size: 0.825rem;
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
            cursor: pointer;
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

    return (
        <RatingContainer>
            <center>
                <span className="text"> How was your buying experience?</span>
            </center>
            <div className="container">

                <div className="section" onClick={() => setOpen(true)}>
                    <img className="terrible" />
                    <span>Terrible</span>
                </div>

                <div className="section" onClick={() => setOpen(true)}>
                    <img className="bad" />
                    <span>Bad</span>
                </div>

                <div className="section">
                    <img className="ok" />
                    <span>Ok</span>
                </div>

                <div className="section">
                    <img className="good" />
                    <span>Good</span>
                </div>

                <div className="section">
                    <img className="great" />
                    <span>Great</span>
                </div>
                <Popup
                    openPopup={open} 
                    setOpenPopup = {setOpen}
                    title ={"Reviews"}
                    content ={"Please share your experience and feedback."}/>

            </div>
        </RatingContainer>

    )
}

export default Rating;