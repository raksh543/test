import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import styled from 'styled-components';

const Address = () => {

    const AddrContainer = styled.div`
        
        .desktopAddr{
            padding: 12px;
            margin-top: 10px;
        }
        .mobileAddr{
            display: none;
        }
        .card{
            background-color: #F8F8F8;
            padding: 10px;
        }
        .addr{
            color: #1D1D1D;
            font-size: 17px;
            font-family: roboto;
        }
        .name{
            font-size: 20px;
            font-family: roboto;
            font-weight: bold;
        }
        .head{
            color: #5C5C5C;
            font-size: 16px;
        }
        .addrLabel{
            float: right;
        }

        @media (max-width: 599px){
            .desktopAddr{
                display: none;
            }
            .mobileAddr{
                display: block;
                margin-top: 16px;
            }
            .info{
                border: 1px solid #e3e3e3;
                margin: 16px;
                padding: 12px;
                border-radius: 5px;
            }
            .head{
                margin-left: 18px;
            }
        }
    `

    return(
        <AddrContainer>
            <div className="desktopAddr">
            <span className="head">Delivery address</span>
            <br />
            <br />
            <div className="card">
                <span className="name">Aman Tiwari</span>
                <button className="addrLabel">Office</button>
                <br />
                <br />
                <span className="addr">BLM tower, 4th floor, sector 44, gurugram, haryana, india</span><br /><br />
            </div>
            </div>
            <div className="mobileAddr">
                <span className="head">Delivery address</span>
                <div className="info">
                <span className="addr">BLM tower, 4th floor, sector 44, gurugram, haryana, india</span><br /><br />
                <span className="m_name">Aman Tiwari</span><br /><br />
                <span classNmae="m_phone">9999412563</span><br /><br />
                </div>
            </div>
        </AddrContainer>
    )
};

export default Address;
