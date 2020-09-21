import React from 'react';
import styled from 'styled-components';

const Cashback = () => {
    const CashbackConatiner = styled.div`
    margin: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .CBimg{
        align-self: center;
    }

    `
    return(
        <CashbackConatiner>
            <img src={require("./../../assets/Wallet@2x.png")} className="CBimg" width="30px" height="30px"/>
            <div>
                Your 100 Cashback on this order <br />
                Will be credited after return period is over
            </div>
            <img className="CBimg" src={require("./../../assets/Icon material-navigate-next@2x.png")} width="8px" height="12px" />
        </CashbackConatiner>
    )
}

export default Cashback;