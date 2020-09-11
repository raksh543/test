import React from 'react';
import styled from 'styled-components';

const Updated =() => {
    const UpdatedStyle = styled.div`
        display: flex;
        flex-direction: column;

        .contactinfo{
            border: 1px solid #DBDBDB;
            padding: 18px;
        }
        .expected{
            color: #6DA523;
        }
    `

    return(
        <UpdatedStyle>
            <span>We will keep you updated on</span>
            <div style={{display: "flex", flexDirection: "row", alignItems: 'center'}}>
                <div className="contactinfo"> email </div>
                <div className="contactinfo"> phone no </div>
                <span className="expected">Delivery expected by 14 July, 2020. </span>
            </div>
        </UpdatedStyle>
    )
};

export default Updated;