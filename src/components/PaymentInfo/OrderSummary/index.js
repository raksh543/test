import React from 'react';
import TextLRSection from '../../TextLRSection';
import styled from 'styled-components';

const OrderSummary = () => {
    const OSContainer = styled.div`
    .desktopOS{
        padding: 16px;
    }
    .mobileOS{
        display: none;
    }

    @media (max-width: 599px){
        .desktopOS{
            display: none;
        }
        .mobileOS{
            display: block;
        }
        .summary{
            border: 1px solid #e3e3e3;
            margin: 16px;
            padding: 12px;
            border-radius: 5px;
        }
        .viewDetails{
            text-align: right;
            margin-right: 24px;
            color: #00AFEF;
            font-size: 12px;
        }
    }
    `

    return(
        <OSContainer>
            <div className="desktopOS">
                <TextLRSection textL="Order Total" textR="Rs 1479.00"/>
                <TextLRSection textL="Items Discount" textR="-Rs 1479.00" colorR="red"/>
                <TextLRSection textL="Sub Total" textR="Rs 1479.00"/>
                <TextLRSection textL="Coupons discount" textR="-Rs 1479.00" colorR="red"/>
                <TextLRSection textL="shipping Charges" textR="Rs 1479.00"/>
                <TextLRSection textL="Mamapay credit" textR="-Rs 1479.00" colorR="red"/>
                <TextLRSection textL="Total" textR="Rs 1479.00" sizeR={20}/>
            </div>
            <div className="mobileOS">
                <div className="summary">
                <TextLRSection textL="Order Total" textR="Rs 1479.00"/>
                <TextLRSection textL="Items Discount" textR="-Rs 1479.00" colorR="red"/>
                <TextLRSection textL="Sub Total" textR="Rs 1479.00"/>
                <TextLRSection textL="Coupons discount" textR="-Rs 1479.00" colorR="red"/>
                </div>
                    <p className="viewDetails"> {"View Details  >"}</p>
            </div>
        </OSContainer>
    )
}

export default OrderSummary;