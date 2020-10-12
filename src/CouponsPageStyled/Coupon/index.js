import React from 'react';
import styled from 'styled-components';
import './../../index.css';

export default function Coupon({ imgSrc, Height, Width, title, content, moreContent }) {
    const Coupon = styled.div`
    margin: 0 0 1rem 0;
    border: 1px solid #EAEAEA;
    border-radius: 5px;
    padding: 8px 0;
    max-width: 630px;

    .paper {
        padding: 1rem;
        text-align: center;
    },
    .root{
        display: flex;
        flex-direction: row;
        align-items: center;
    },
    .title {
        font-size: 1.125rem;
        color: #989898;
        font-family: Roboto-Regular;
    },
    .pos {
        margin-bottom: 12;
    },
    .cover {
        width: 200;
        height: 150;
    },
    .body {
        font-size: 1rem;
        font-family: Roboto-Regular;
        color: #1D1D1D;
        line-height: 1.2;
    },
    .moreContent {
        font-size: 0.75rem;
        font-family: Roboto-Medium;
        color: #5C5C5C;
    },
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
                <img src={imgSrc} style={{ maxWidth: Width, maxHeight: Height,display: 'flex',  flex:1, justifyContent: 'flex-start' }} />
                <div style={{ maxWidth: '15rem', margin: '1rem 1vw', display: 'flex', flex:1, flexDirection: 'column' }}>
                    <div className="title" >
                        {title}
                    </div>
                    <br />
                    <span className="body">
                        {content}
                    </span>
                    <br />
                    {showMore == false ? <span style={{fontSize: '1rem', color: '#00AFEF', fontFamily: 'Roboto-Medium',  cursor: 'pointer'}} onClick={() => setShowMore(true)}> + More</span>
                        :
                        <div className="moreContent">
                            Terms and Conditions
                        <br />
                            {moreContent}
                        </div>
                    }
                </div>
                {showCode == false ?
                    <img
                        src={require('./../../assets/Coupon/CopyCode.svg')}
                        onClick={() => setShowCode(true)}
                        style={{ maxWidth: '210px', cursor: 'pointer',  display:'flex',flex:1 }}
                    />
                    :
                    <img src={require('./../../assets/Coupon/Path14172.svg')} style={{ maxWidth: '210px',display: 'flex',  flex:1, justifyContent: 'flex-end' }} />
                }
            </div>

        </Coupon>
    );
}