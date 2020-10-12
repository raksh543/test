import React from 'react';
import styled from 'styled-components';
import './../../index.css';

export default function CouponMobile({ imgSrc, Height, Width, title, content, moreContent }) {
    const Coupon = styled.div`
    padding: 8px 18px 0 18px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    .title {
        font-size: 1.125rem;
        color: #1D1D1D;
        font-family: Roboto-Medium;
    };
    .body {
        font-size: 0.9rem;
        font-family: Roboto-Regular;
        color: #1D1D1D;
        line-height: 1.4;
        padding-right: 4.5rem;
        margin-top: 8px;
    };
    .moreContent {
        font-size: 0.85rem;
        font-family: Roboto-Regular;
        color: #1D1D1D;
        margin-top: 8px;
    };
    .shape {
        padding: 10px 20px 15px 20px;
        color: #1D1D1D;
        font-size: 16px;
        font-family: Roboto-Medium;
        background-image: url(${require('./../../assets/Coupon/coupon_bg.svg')});
        background-size: contain;
        background-repeat: no-repeat;
      };
    `;

    const Button = styled.button`
        background: white;
        cursor: pointer;
        border: 0px;
        margin: 1em;
        padding: 0.25em 1em;
        font-size: 1rem;
        color: #00AFEF;
        fontFamily: Roboto-Medium;
`;
    const [showMore, setShowMore] = React.useState(false)
    const [showCode, setShowCode] = React.useState(false)

    return (
        <Coupon>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div className="shape">
                    MASTERCARD100
                </div>
                {showCode === false ?
                    <div
                        onClick={() => setShowCode(true)} 
                        style={{color: '#00AFEF', fontSize: '14px', fontFamily: 'Roboto-Medium', padding: '12px 26px', border: '1px solid #EAEAEA', borderRadius: '5px'}}>
                        Copy 
                    </div>
                    :
                    <div style={{display: 'flex', flexDirection: 'row',color: '#6DA523', fontSize: '14px', fontFamily: 'Roboto-Medium', padding: '12px 26px', alignItems: 'center'}}>
                        <img src={require('./../../assets/Coupon/copied.svg')}  height='15px' />
                        <span style={{marginLeft: '5px'}}>Copied</span>
                    </div>
                }
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>
                <div className="title" >
                    {title}
                </div>
                <span className="body">
                    {content}
                </span>
                {showMore === false ? 
                    <span 
                        style={{fontSize: '1rem', color: '#00AFEF', fontFamily: 'Roboto-Medium',  cursor: 'pointer', marginTop: '8px'}} 
                        onClick={() => setShowMore(true)}>
                        + More
                    </span>
                    :
                    <div className="moreContent">
                        <span style={{color: '#989898'}}>Terms and Conditions</span>
                        <div style={{display: 'flex',alignItems: 'center'}}>
                            <span style={{fontSize: '25px', marginRight: '8px', color: '#5C5C5C'}}>•</span> <span> Terms and Conditions</span>
                        </div>
                        <div style={{display: 'flex',alignItems: 'center'}}>
                            <span style={{fontSize: '25px', marginRight: '8px', color: '#5C5C5C'}}>•</span> <span> Terms and Conditions</span>
                        </div>
                        <div style={{display: 'flex',alignItems: 'center'}}>
                            <span style={{fontSize: '25px', marginRight: '8px', color: '#5C5C5C'}}>•</span> <span> Terms and Conditions</span>
                        </div>
                        <div style={{display: 'flex',alignItems: 'center'}}>
                            <span style={{fontSize: '25px', marginRight: '8px', color: '#5C5C5C'}}>•</span> <span> Terms and Conditions</span>
                        </div>       
                    </div>
                }
            </div>
        </Coupon>
    );
}