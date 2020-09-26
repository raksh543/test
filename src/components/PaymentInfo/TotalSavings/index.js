import React from 'react';
import styled from 'styled-components';

const TotalSavings = ({saving}) => {
    const TSContainer=  styled.div`
        margin:0.5rem;
        background-color: #00AFEF1A;
        border: 1px dashed #00AFEF;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-radius: 0.3125rem;
        font-family: Roboto-Regular;
        align-content: center;
        vertical-align:middle;

        .content{
            color: #00AFEF;
            font-size: 0.825rem;
            // margin-bottom: 0.625rem;
            vertical-align:middle;   
        }

        .drop{
            float:right;
            margin-right: 1rem;
            margin-top: 0.3125rem;
            vertical-align:middle;   
        }
        .coin{
            // margin-top: 0.3125rem;
            margin-left: 0.625rem;
            margin-right: 0.625rem;
            vertical-align:middle;   
        }
    `
    return(
        <TSContainer>
            <img className="coin" src={require("./../../../assets/coin@2x.png")} height="20px" width="20px"/>
            <span className="content">Total savings of {saving} on this order</span>
            <img className="drop" src={require("./../../../assets/drop@2x.png")} height="8px" width="10px"/>
        </TSContainer>
    )
}

export default TotalSavings;