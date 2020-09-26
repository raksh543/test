import React from 'react';
import styled from 'styled-components';
import './../../index.css'

const ShareAndEarn =() =>{
    const ShareEarn = styled.div`
    padding: 1.25rem;
    display: flex;
    flex-flow: row;
    background-color: #F8F8F8;
    flex-wrap: wrap;
    max-width: 53.125rem;
    margin-top: 2rem;
    justify-content: space-around;
    margin-bottom: 1.25rem;

    .heading{
        font-size:1.5rem;
        color: #5C5C5C;
        font-family: Cocon-Regular-Font;
    }
    .work{
        color: #00AFEF;
        font-size: 1.0625rem;
        margin-left: 1.5rem;
        font-family: Roboto-Medium;
    }
    .content{
        font-size: 1rem;
        color: #5C5C5C;
        margin-top: 1.375rem;
        margin-bottom: 1.375rem;
        max-width: 31.25rem;
        font-family: Roboto-Regular;
    }
    .referral{
        padding: 1rem 3.125rem;
        background-color: #00AFEF;
        border-radius: 5px;
        border: 0px;
        color: white;
        font-size: 1.25rem;
        font-family: roboto;
        pointer: cursor;
        margin-bottom: 1.375rem;
        font-family: Roboto-Medium;
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