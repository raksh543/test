import React from 'react';
import Review from './Review';
import styled from 'styled-components'

export default function CustomerReviews() {
    const ReviewsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0;
    * {
        box-sizing: border-box;
      }
    .root {
        box-sizing: border-box;
    },
    .buttonHeader {
        display: flex;
        flex: 1;
        justify-content: space-between;
        margin: 1rem 0;
    },
    .container{
        box-sizing: border-box;
    }
    .row{
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        justify-content: space-around;
    }
    .column{
        width: 30%;
    }
    @media screen and (max-width: 992px) {
        .column {
          flex: 50%;
        }
      }
      
      @media screen and (max-width: 600px) {
        .row {
          flex-direction: column;
        }
    `
    const Button = styled.div`
        cursor: pointer;
        display: flex;
        flex-direction: row;
        background:white;
        color: white;
        font-size: 1em;
        margin: 1em;
        padding: 0.5em 1em;
        border: 0px;
        border-radius: 5px;
    `;
    return (
        <ReviewsContainer>
            <div className="root">
                <img src={require('./../assets/Coupon/Group10329.png')} width='100%' />
            </div>
            <div style={{ padding: '1rem 10rem' }}>
                <div style={{ fontFamily: 'Roboto-Regular', fontSize: '0.85rem', color: '#989898' }}>
                    Total :<span style={{ fontFamily: 'Roboto-Bold', fontSize: '1rem', color: '#5C5C5C', marginLeft: '3px' }}>1,942 Reviews</span>
                </div>
                <hr
                    style={{
                        color: '#EAEAEA',
                        backgroundColor: '#EAEAEA',
                        border: '0px',
                        height: 1,
                        margin: '1rem 0'
                    }}
                />
                <div className="buttonHeader">
                    <Button
                        style={{ color: '#5C5C5C', border: '1px solid #EAEAEA', fontSize: '14px', fontFamily: 'Roboto-Regular', textTransform: 'none' }}
                    >
                        All Reviews
                        <img width="10px" style={{ marginLeft: '0.75rem' }} src={require('./../assets/Reviews/Icon_material-navigate-next.svg')} />
                    </Button>
                    <Button
                        style={{ color: '#00AFEF', fontSize: '14px', fontFamily: 'Roboto-Medium', textTransform: 'none' }}
                    >
                        <img style={{ marginRight: '0.75rem' }} src={require('./../assets/Coupon/awesome-sort-amount-down-alt.svg')} />
                        Most Helpful
                    </Button>
                </div>
                <div className="row">
                    <div className="column">
                        <Review />
                    </div>
                    <div className="column">
                        <Review />
                    </div>
                    <div className="column">
                        <Review />
                    </div>
                </div>
                <hr
                    style={{
                        color: '#EAEAEA',
                        backgroundColor: '#EAEAEA',
                        border: '0px',
                        height: 1,
                        margin: '1rem 0'
                    }}
                />
                <div className="row">
                    <div className="column">
                        <Review />
                    </div>
                    <div className="column">
                        <Review />
                    </div>
                    <div className="column">
                        <Review />
                    </div>
                </div>
                <hr
                    style={{
                        color: '#EAEAEA',
                        backgroundColor: '#EAEAEA',
                        border: '0px',
                        height: 1,
                        margin: '1rem 0'
                    }}
                />
                <div className="row">
                    <div className="column">
                        <Review />
                    </div>
                    <div className="column">
                        <Review />
                    </div>
                    <div className="column">
                        <Review />
                    </div>
                </div>
                <hr
                    style={{
                        color: '#EAEAEA',
                        backgroundColor: '#EAEAEA',
                        border: '0px',
                        height: 1,
                        margin: '1rem 0'
                    }}
                />
            </div>
        </ReviewsContainer>
    )
}