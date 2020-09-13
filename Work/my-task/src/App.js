import React from 'react';
import { View } from 'react-native';
import PaymentInfo from './components/PaymentInfo';
import Placed from './components/Placed';
import Rating from './components/Rating';
import ShareAndEarn from './components/ShareAndEarn';
import Updated from './components/Updated';
import Note from './components/Note';
import styled from 'styled-components';

const App = () => {
    const MyAccount = styled.div`
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 80px;
        margin-right: 80px;

        .sectionLeft{
            padding-top: 30px
        }

        .accountHeader{
            border: 0.1px solid #e3e3e3;
        }
    `
    return(
        <MyAccount>
            <div className="accountHeader">
                <Placed />
                <Rating />
            </div>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width:'100%', flex:1, flexWrap: 'wrap',marginTop: '32px',}}>
                <div className="sectionLeft">
                    <Note />
                    <Updated />
                    <ShareAndEarn />
                </div>
                <PaymentInfo />
            </View>
        </MyAccount>
    )
};

export default App;
