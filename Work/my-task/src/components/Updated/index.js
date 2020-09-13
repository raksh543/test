import React from 'react';
import styled from 'styled-components';

const Updated =() => {
    const UpdatedStyle = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 32px;

        .contactinfo{
            border: 1px solid #DBDBDB;
            padding: 18px;
            font-size: 17px;
            color: #1D1D1D;
        }
        .expected{
            color: #6DA523;
            font-size: 15px;
        }
        .heading{
            font-size: 18px;
            font-family: roboto;
            color: #5C5C5C;
        }
    `

    return(
        <UpdatedStyle>
            <span className="heading">We will keep you updated on</span>
            <div style={{display: "flex", flexDirection: "row", alignItems: 'center', marginTop: 10}}>
                <div className="contactinfo"> email </div>
                <div className="contactinfo" style={{marginRight: 10}}> phone no </div>
                <span className="expected">Delivery expected by 14 July, 2020. </span>
            </div>
        </UpdatedStyle>
    )
};

export default Updated;