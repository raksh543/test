import React from 'react';
import { View } from 'react-native';
import PaymentInfo from './components/PaymentInfo';
import Placed from './components/Placed';
import Rating from './components/Rating';
import ShareAndEarn from './components/ShareAndEarn';
import Updated from './components/Updated';
import Note from './components/Note';
import Cashback from './components/Cashback';
import styled from 'styled-components';

const App = () => {
    const MyAccountWeb = styled.div`
        
        
        .desktop{
            display: block;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-left: 80px;
            margin-right: 80px;
            @media (max-width: 599px){
                display: none;
            }
        }
        .mobile{
            display: none;
            @media (max-width: 599px){
                display: block;
            }
        }

        .sectionLeftDesktop{
            padding-top: 30px;
           
        }

        .accountHeaderDesktop{
            border: 0.1px solid #e3e3e3;

           
        }
        .sectionDesktop{
            display: flex;
            flex-direction: row; 
            justify-content: space-between; 
            width:100%; 
            flex:1;
            flex-wrap: wrap;
            margin-top: 32px;

            @media (max-width: 1467px) {
                flex-direction: row;
                justify-content: space-around;
            }
        }
    `

   
    return(
        <MyAccountWeb>
            <div className="desktop">
                <div className="accountHeaderDesktop">
                    <Placed />
                    <Rating />
                </div>
                <div className="sectionDesktop">
                    <div className="sectionLeftDesktop">
                        <Note />
                        <Updated email={"aman.t@mamaearth.in"} phone={9999564525}/>
                        <ShareAndEarn />
                    </div>
                    <PaymentInfo />
                </div>
            </div>
            <div className="mobile">
                    <Placed />
                    <PaymentInfo />
                    <Cashback />
                    <View
                        style={{
                            borderBottomColor: '#F2F9E8',
                            borderBottomWidth: '5px',
                        }}
                        />
                    <Rating />
                    <View
                        style={{
                            borderBottomColor: '#F2F9E8',
                            borderBottomWidth: '5px',
                        }}
                        />
                        
                        <ShareAndEarn />
                    
            </div>
        </MyAccountWeb>
        
    )
};

export default App;
