import React from 'react';
import styled from 'styled-components';

const Cashback = ({cashback}) => {
    const CBContainer = styled.div`
    background-color: #FF8800;
    color: white;
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom:0.5rem;

    .content{
        font-size: 0.9375rem;
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