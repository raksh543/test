import React from 'react';
import TextLRSection from '../../TextLRSection';
import styled from 'styled-components';

const OrderSummary = () => {
    const OSContainer = styled.div`
    .desktopOS{
        padding: 1rem;
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
            margin: 1rem;
            padding: 0.75rem;
            border-radius: 5px;
        }
        .viewDetails{
            text-align: right;
            margin-right: 1.5rem;
            color: #00AFEF;
            font-size: 0.75rem;
        }
    }
    `

    return(
        <OSContainer>
            <div className="desktopOS">
                <TextLRSection textL="Order ID" textR="Rs 1479.00"/>
                <TextLRSection textL="Items Discount" textR="-Rs 1479.00" colorR="red"/>
                <TextLRSection textL="Sub Total" textR="Rs 1479.00"/>
                <TextLRSection textL="Coupons discount" textR="-Rs 1479.00" colorR="red"/>
                <TextLRSection textL="shipping Charges" textR="Rs 1479.00"/>
                <TextLRSection textL="Mamapay credit" textR="-Rs 1479.00" colorR="red"/>
                <TextLRSection textL="Total" textR="Rs 1479.00" sizeR={20}/>
            </div>
            <div className="mobileOS">
                <div className="summary">
                <TextLRSection textL="Order ID" textR="3211456258"/>
                <TextLRSection textL="Total Amount Paid" textR="₹ 699"/>
                <TextLRSection textL="Expected Delivery" textR="5 July 2020"/>
                <TextLRSection textL="Coupons discount" textR="Cash on Delivery"/>
                </div>
                    <p className="viewDetails"> {"View Details  >"}</p>
            </div>
        </OSContainer>
    )
}

export default OrderSummary;