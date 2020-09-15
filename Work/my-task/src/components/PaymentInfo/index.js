import React from 'react';
import { Text, View } from 'react-native';
import OrderSummary from './OrderSummary';
import Address from './Address';
import Cashback from './Cashback';
import TotalSavings from './TotalSavings';
import styles from './styles';
import styled from 'styled-components';

const PaymentInfo = () => {
    const PaymentContainer = styled.div`
    
    .desktopPI{
        width: 400px;
        margin-bottom: 32px;
        border: 1px solid #e3e3e3;
        border-radius: 5px;
    }
    .textPI{
        font-size: 20px;
        background-color: #5C5C5C;
        color: white;
        padding: 6px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
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
                    <View
                        style={{
                            borderBottomColor: '#F2F9E8',
                            borderBottomWidth: '5px',
                        }}
                        />
                    <Address />
                    <View
                        style={{
                            borderBottomColor: '#F2F9E8',
                            borderBottomWidth: '5px',
                        }}
                        />
                </div>
             
         </PaymentContainer>
    )
};

export default PaymentInfo;