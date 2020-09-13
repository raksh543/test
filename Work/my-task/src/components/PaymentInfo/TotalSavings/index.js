import React from 'react';
import styled from 'styled-components';

const TotalSavings = ({saving}) => {
    const TSContainer=  styled.div`
        margin:8px;
        background-color: #00AFEF1A;
        border: 1px dashed #00AFEF;
        padding-top: 5px;
        padding-bottom: 5px;

        .content{
            color: #00AFEF;
        }

        .drop{
            position: absolute;
            right: 20px;
            margin-top: 5px;
        }
        .coin{
            margin-top: 5px;
            margin-left: 10px;
            margin-right: 10px;
        }
    `
    return(
        <TSContainer>
            <img className="coin" src={require("./../../../assets/coin@2x.png")} height="10px" width="10px"/>
            <span className="content">Total savings of {saving} on this order</span>
            <img className="drop" src={require("./../../../assets/drop@2x.png")} height="8px" width="10px"/>
        </TSContainer>
    )
}

export default TotalSavings;