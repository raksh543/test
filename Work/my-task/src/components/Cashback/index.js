import React from 'react';
import styled from 'styled-components';

const Cashback = () => {
    const CashbackConatiner = styled.div`
    margin: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .CBimg{
        margin-top: 30px;
    }

    `
    return(
        <CashbackConatiner>
            <img alt="Wallet" className="CBimg"/>
            <div>
                <p>Your 100 Cashback on this order</p>
                <p>Will be credited after return period is over</p>
            </div>
            <img className="CBimg" src={require("./../../assets/next@2x.png")} height='20px' width='20px'/>
        </CashbackConatiner>
    )
}

export default Cashback;