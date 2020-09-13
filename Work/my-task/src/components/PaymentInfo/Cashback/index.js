import React from 'react';
import styled from 'styled-components';

const Cashback = ({cashback}) => {
    const CBContainer = styled.div`
    background-color: #FF8800;
    color: white;
    width: 100%;
    padding-top: 8px;
    padding-bottom:8px;

    .content{
        font-size: 15px;
        font-family: roboto;
    }
    `

    return(
        <CBContainer>
            <center>
                <span className="content"> You will get ₹{cashback} cashback after delivery.</span>
            </center>
        </CBContainer>
    )
}

export default Cashback;