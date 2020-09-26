import React from 'react';
import OrderSummary from './OrderSummary';
import Address from './Address';
import Cashback from './Cashback';
import TotalSavings from './TotalSavings';
import styled from 'styled-components';
import './../../index.css'

const PaymentInfo = () => {
    const PaymentContainer = styled.div`
    
    .desktopPI{
        width: 25rem;
        margin-bottom: 2rem;
        border: 1px solid #e3e3e3;
        border-radius: 0.3125rem;
    }
    .textPI{
        font-size: 1.125rem;
        background-color: #5C5C5C;
        color: white;
        padding: 0.75rem 0.75rem;
        border-top-left-radius: 0.3125rem;
        border-top-right-radius: 0.3125rem;
        font-family: Roboto-Regular;
    }
    .mobilePI{
        display: none;
    }
    @media (max-width: 599px){
        .desktopPI{
            display: none;
        }
        .mobilePI{
            display: block;
        }
    }
    `

    return(
        <PaymentContainer>
                <div className="desktopPI" >
                <div className="textPI">Payment Information</div>
                <OrderSummary />
                <TotalSavings saving={26}/>
                <Cashback cashback={22.6}/>
                <Address />
                </div>
                <div className="mobilePI">
                    <OrderSummary />
                    <hr
                        style={{
                            backgroundColor: '#F2F9E8',
                            height: 5,
                            border: 'none',
                        }}
                    />
                    <Address />
                    <hr
                        style={{
                            backgroundColor: '#F2F9E8',
                            height: 5,
                            border: 'none',
                        }}
                    />
                </div>
             
         </PaymentContainer>
    )
};

export default PaymentInfo;