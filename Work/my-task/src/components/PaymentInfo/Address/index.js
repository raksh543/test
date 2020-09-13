import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import styled from 'styled-components';

const Address = () => {

    const AddrContainer = styled.div`
        padding: 12px;
        margin-top: 10px;

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
        }
    `

    return(
        <AddrContainer>
            <span className="head">Delivery address</span>
            <br />
            <br />
            <div className="card">
                <span className="name">Aman Tiwari</span>
                <br />
                <br />
                <span className="addr">BLM tower, 4th floor, sector 44, gurugram, haryana, india</span>
            </div>
        </AddrContainer>
    )
};

export default Address;
