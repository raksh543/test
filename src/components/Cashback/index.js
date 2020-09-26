import React from 'react';
import styled from 'styled-components';
import './../../index.css';

const Cashback = () => {
    const CashbackConatiner = styled.div`
    margin: 16px;
    display: flex;
    flex-direction: row;
    font-family: Roboto-Regular;

    .CBimg{
        align-self: center;
    }
    .content {
        margin-left: 1rem
    }

    `
    return(
        <CashbackConatiner>
            <img src={require("./../../assets/Wallet.png")} className="CBimg" width="30px" height="30px"/>
            <div className="content">
                <span style={{fontSize: '0.875rem'}}>Your ₹ 100 Cashback on this order</span> <br />
                <span style={{fontSize: '0.625rem', marginTop:'1rem'}}>Will be credited after return period is over</span>
            </div>
            <img className="CBimg" style={{right: 0, position: 'absolute', marginRight: '1.25rem'}} src={require("./../../assets/Icon material-navigate-next@2x.png")} width="8px" height="12px" />
        </CashbackConatiner>
    )
}

export default Cashback;