import React from 'react';
import styled from 'styled-components';

const ShareAndEarn =() =>{
    const ShareEarn = styled.div`
    padding: 20px;
    display: flex;
    flex-flow: row;
    background-color: #F8F8F8;
    flex-wrap: wrap;
    max-width: 850px;
    margin-top: 32px;
    justify-content: space-around;
    margin-bottom: 20px;

    .heading{
        font-size:24px;
        color: #5C5C5C;
        font-family: CoconOT;

    }
    .work{
        color: #00AFEF;
        font-size: 17px;
        margin-left: 24px;
    }
    .content{
        font-size: 16px;
        color: #5C5C5C;
        margin-top: 22px;
        margin-bottom: 22px;
        max-width: 500px
    }
    .referral{
        padding: 16px 50px;
        background-color: #00AFEF;
        border-radius: 5px;
        border: 0px;
        color: white;
        font-size: 20px;
        font-family: roboto;
        pointer: cursor;
        margin-bottom: 22px;
    }
    `

    return(
        <ShareEarn>
            <div>
            <div style={{display:"flex", flexDirection: "row", alignItems: 'center'}}>
            <span className="heading">Share the love, earn credit too!</span>
            <span className="work">How it works</span>
            </div>
            <div className="content">Share your love for Mamaearth with your friends and get rewarded. Your friends will no doubt fall for our natural & toxin-free range of beauty and baby products.The best part? You can refer as many friends as you want.</div>
            <br/>
            <button className="referral">LOG IN FOR FREE REFERRAL CODE</button>
            </div>
            <img src={require("./../../assets/refer_img@2x.png")} height="200px" width="320px"/>
        </ShareEarn>
    )
}

export default ShareAndEarn;