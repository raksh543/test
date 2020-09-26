import React from 'react';
import styled from 'styled-components';

const Address = () => {

    const AddrContainer = styled.div`
        
        .desktopAddr{
            padding: 0.75rem;
            margin-top: 0.625rem;
        }
        .mobileAddr{
            display: none;
        }
        .card{
            background-color: #F8F8F8;
            padding: 0.625rem;
        }
        .addr{
            color: #1D1D1D;
            font-size: 1.0625rem;
            font-family: roboto;
        }
        .name{
            font-size: 1.25 rem;
            font-family: roboto;
            font-weight: bold;
        }
        .head{
            color: #5C5C5C;
            font-size: 1rem;
        }
        .addrLabel{
            float: right;
        }

        @media (max-width: 599px){
            .desktopAddr{
                display: none;
            }
            .mobileAddr{
                display: block;
                margin-top: 1 rem;
            }
            .info{
                border: 1px solid #e3e3e3;
                margin: 1rem;
                padding: 0.75rem;
                border-radius: 5px;
            }
            .head{
                margin-left: 1.125rem;
            }
        }
    `

    return(
        <AddrContainer>
            <div className="desktopAddr">
            <span className="head">Delivery address</span>
            <br />
            <br />
            <div className="card">
                <span className="name">Aman Tiwari</span>
                <button className="addrLabel">Office</button>
                <br />
                <br />
                <span className="addr">BLM tower, 4th floor, sector 44, gurugram, haryana, india</span><br /><br />
            </div>
            </div>
            <div className="mobileAddr">
                <span className="head">Delivery address</span>
                <div className="info">
                <span className="addr">BLM tower, 4th floor, sector 44, gurugram, haryana, india</span><br /><br />
                <span className="m_name">Aman Tiwari</span><br /><br />
                <span classNmae="m_phone">9999412563</span><br /><br />
                </div>
            </div>
        </AddrContainer>
    )
};

export default Address;
