import React from 'react';
import styled from 'styled-components';
import './../../index.css';

export default function Coupon({ imgSrc, Height, Width, title, content, moreContent }) {
    const Coupon = styled.div`
    margin: 0 0.5rem 1rem 0.5rem;
    border: 1px solid #EAEAEA;
    border-radius: 5px;
    padding: 8px 1.5rem;
    max-width: 610px;
    display: flex;
    flex-direction: column;

    .root{
        display: flex;
        flex-direction: row;
        align-items: center;
    };
    .title {
        font-size: 1.025rem;
        color: #989898;
        font-family: Roboto-Regular;
    };
    .body {
        font-size: 0.95rem;
        font-family: Roboto-Regular;
        color: #1D1D1D;
        line-height: 1.2;
    };
    .moreContent {
        font-size: 0.75rem;
        font-family: Roboto-Medium;
        color: #5C5C5C;
        padding-left:10px;
    };
    `

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
            <div className="root">
                <img src={imgSrc} style={{ maxWidth: Width, maxHeight: Height, display: 'flex', flex: 1, justifyContent: 'flex-start' }} />
                <div style={{ maxWidth: '15rem', margin: '1rem 1vw', display: 'flex', flex: 1, flexDirection: 'column' }}>
                    <div className="title" >
                        {title}
                    </div>
                    <br />
                    <span className="body">
                        {content}
                    </span>

                </div>
                {showCode === false ?
                    <img
                        src={require('./../../assets/Coupon/CopyCode.svg')}
                        onClick={() => setShowCode(true)}
                        style={{ maxWidth: '200px', cursor: 'pointer', display: 'flex', flex: 1 }}
                    />
                    :
                    <div style={{ height: '50px', width: '200px', border: '1px solid #eaeaea', borderRadius: '5px', display: 'flex', flexDirection: 'row', color: '#6DA523', fontSize: '14px', fontFamily: 'Roboto-Medium', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={require('./../../assets/Coupon/copied.svg')} height='17px' />
                        <span style={{ marginLeft: '5px' }}>Copied</span>

                    </div>
                }
            </div>
            <div style={{marginLeft: Width}}>
            {showMore === false ? <span style={{ paddingLeft:'10px', fontSize: '1rem', color: '#00AFEF', fontFamily: 'Roboto-Medium', cursor: 'pointer' }} onClick={() => setShowMore(true)}> + More</span>
                :
                <div className="moreContent">
                    <span style={{ color: '#5c5c5c' }}>Terms and Conditions</span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '25px', marginRight: '8px', color: '#1d1d1d' }}>•</span> <span> {moreContent}</span>
                    </div>
                </div>
            }
            </div>
        </Coupon>
    );
}