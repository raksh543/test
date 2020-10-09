import React from 'react';
import styled from 'styled-components';
import './../../index.css';

export default function Coupon({ imgSrc, Height, Width, title, content, moreContent }) {
    const Coupon = styled.div`
    .paper {
        padding: 1rem;
        text-align: center;
    },
    .root{
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid #EAEAEA;
        border-radius: 5px;
    },
    .title {
        font-size: 1.125rem;
        color: #989898;
        font-family: Roboto-Regular;
        paddingBottom: 0.5rem;
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
        fontFamily: Roboto-Regular;
        color: #1D1D1D;
    },
    .more {
        font-size: 1rem;
        color: #00AFEF;
        fontFamily: Roboto-Medium;
        paddingTop: 0.5rem;
    },
    .moreContent {
        font-size: 0.75rem;
        font-family: Roboto-Medium;
        margin-top: 0.75rem;
        color: #5C5C5C;
    },
    `

    const Button = styled.button`
        /* Adapt the colors based on primary prop */
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
                <img src={imgSrc} style={{ maxWidth: Width, maxHeight: Height, margin: '1rem' }} />

                <div style={{ maxWidth: '16.25rem', margin: '1rem 0rem' }}>
                    <div className="title" >
                        {title}
                    </div>
                    <div className="body">
                        {content}
                    </div>
                    {showMore == false ? <Button className="more" onClick={() => setShowMore(true)}> + More</Button>
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
                        style={{ maxWidth: '210px', margin: '1rem', cursor: 'pointer' }}
                    />
                    :
                    <img src={require('./../../assets/Coupon/Path14172.svg')} style={{ maxWidth: '210px', margin: '1rem' }} />
                }
            </div>

        </Coupon>
    );
}