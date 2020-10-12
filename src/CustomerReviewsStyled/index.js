import React from 'react';
import Review from './Review';
import ReviewMobile from './ReviewMobile';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default function CustomerReviews() {
    const ReviewsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0;
    @media (max-width: 599px){
        display: none;
    }
    * {
        box-sizing: border-box;
      };
    .root {
        box-sizing: border-box;
    };
    .buttonHeader {
        display: flex;
        flex: 1;
        justify-content: space-between;
        margin: 1rem 0;
    };
    .container{
        box-sizing: border-box;
    };
    .row{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        box-sizing: border-box;
        justify-content: space-around;
    };
    
    
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

    const ReviewsContainerMobile = styled.div`
        display: none;
        margin-bottom: 0;
        box-sizing: border-box;
        @media (max-width: 599px){
            display: block;
        };
        .buttonHeader {
            display: flex;
            flex: 1;
            justify-content: space-between;
            margin: .09rem 0;
        };
    `
    return (
        <div>
            <ReviewsContainer>
                <div className="root">
                    <img src={require('./../assets/Coupon/Group10329.png')} width='100%' />
                </div>
                <div style={{ padding: '1rem 5vw' }}>
                    <div style={{ padding: '0 4vw' }}>
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
                                <span style={{ marginRight: '0.50rem' }}>Most Helpful</span>
                                <img src={require('./../assets/Coupon/awesome-sort-amount-down-alt.svg')} height="14px" />
                            </Button>
                        </div>
                    </div>
                    {/* <Grid fluid>
                        <Row>
                            <Col xs={6} md={4} style={{ borderBottom: '1px solid #EAEAEA' }}>
                                <Review
                                    name={'Alexender'}
                                    date={'10 October 2020'}
                                    rating={3.5}
                                    newPrice={349}
                                    oldPrice={499}
                                    discount={3}
                                />
                            </Col>
                            <Col xs={6} md={4} style={{ borderBottom: '1px solid #EAEAEA' }}>
                                <Review
                                    name={'Alexender'}
                                    date={'10 October 2020'}
                                    rating={3.5}
                                    newPrice={349}
                                    oldPrice={499}
                                    discount={3}
                                />
                            </Col>
                            <Col xs={6} md={4} style={{ borderBottom: '1px solid #EAEAEA' }}>
                                <Review
                                    name={'Alexender'}
                                    date={'10 October 2020'}
                                    rating={3.5}
                                    newPrice={349}
                                    oldPrice={499}
                                    discount={3}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={4} style={{ borderBottom: '1px solid #EAEAEA' }}>
                                <Review
                                    name={'Alexender'}
                                    date={'10 October 2020'}
                                    rating={3.5}
                                    newPrice={349}
                                    oldPrice={499}
                                    discount={3}
                                />
                            </Col>
                            <Col xs={6} md={4} style={{ borderBottom: '1px solid #EAEAEA' }}>
                                <Review
                                    name={'Alexender'}
                                    date={'10 October 2020'}
                                    rating={3.5}
                                    newPrice={349}
                                    oldPrice={499}
                                    discount={3}
                                />
                            </Col>
                            <Col xs={6} md={4} style={{ borderBottom: '1px solid #EAEAEA' }}>
                                <Review
                                    name={'Alexender'}
                                    date={'10 October 2020'}
                                    rating={3.5}
                                    newPrice={349}
                                    oldPrice={499}
                                    discount={3}
                                />
                            </Col>
                        </Row>
                    </Grid> */}
                    <div className="row">
                        <Review
                            name={'Alexender'}
                            date={'10 October 2020'}
                            rating={3.5}
                            newPrice={349}
                            oldPrice={499}
                            discount={3}
                        />
                        <Review
                            name={'Alexender'}
                            date={'10 October 2020'}
                            rating={3.5}
                            newPrice={349}
                            oldPrice={499}
                            discount={3}
                        />
                        <Review
                            name={'Alexender'}
                            date={'10 October 2020'}
                            rating={3.5}
                            newPrice={349}
                            oldPrice={499}
                            discount={3}
                        />
                        <Review
                            name={'Alexender'}
                            date={'10 October 2020'}
                            rating={3.5}
                            newPrice={349}
                            oldPrice={499}
                            discount={3}
                        />
                        <Review
                            name={'Alexender'}
                            date={'10 October 2020'}
                            rating={3.5}
                            newPrice={349}
                            oldPrice={499}
                            discount={3}
                        />
                        <Review
                            name={'Alexender'}
                            date={'10 October 2020'}
                            rating={3.5}
                            newPrice={349}
                            oldPrice={499}
                            discount={3}
                        />
                        <Review
                            name={'Alexender'}
                            date={'10 October 2020'}
                            rating={3.5}
                            newPrice={349}
                            oldPrice={499}
                            discount={3}
                        />
                        <Review
                            name={'Alexender'}
                            date={'10 October 2020'}
                            rating={3.5}
                            newPrice={349}
                            oldPrice={499}
                            discount={3}
                        />
                        <Review
                            name={'Alexender'}
                            date={'10 October 2020'}
                            rating={3.5}
                            newPrice={349}
                            oldPrice={499}
                            discount={3}
                        />
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


            <ReviewsContainerMobile>
                <img src={require('./../assets/Coupon/Group10329.svg')} width='100%' />
                <div style={{ fontFamily: 'Roboto-Regular', fontSize: '0.85rem', color: '#989898', marginTop: '1rem' }}>
                    <center>
                        Total :<span style={{ fontFamily: 'Roboto-Bold', fontSize: '1rem', color: '#5C5C5C', marginLeft: '3px' }}>1,942 Reviews</span>
                    </center>
                </div>
                <div className="buttonHeader">
                    <Button
                        style={{ color: '#5C5C5C', border: '1px solid #EAEAEA', fontSize: '14px', fontFamily: 'Roboto-Bold', textTransform: 'none' }}
                    >
                        All Reviews
                        <img width="10px" style={{ marginLeft: '0.75rem' }} src={require('./../assets/Reviews/Icon_material-navigate-next.svg')} />
                    </Button>
                    {/* <Dropdown /> */}
                    <Button
                        style={{ color: '#00AFEF', fontSize: '14px', fontFamily: 'Roboto-Medium', textTransform: 'none' }}
                    >

                        <span style={{ marginRight: '0.55rem' }} >Most Helpful </span>
                        <img src={require('./../assets/Coupon/awesome-sort-amount-down-alt.svg')} height="14px" />
                    </Button>
                </div>

                <div style={{ display: ' flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <div style={{ flex: 1 }}>
                        <ReviewMobile
                            name={'Alexender'}
                            date={'10 October 2020'}
                            rating={3.5}
                            newPrice={339}
                        /></div>
                    <div style={{ flex: 1 }}>
                        <ReviewMobile
                            name={'Alexender'}
                            date={'10 October 2020'}
                            rating={3.5}
                            numlikes={3}
                            newPrice={339}
                        /></div>

                </div>
                <div style={{ display: ' flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <div style={{ flex: 1 }}>
                        <ReviewMobile
                            name={'Alexender'}
                            date={'10 October 2020'}
                            rating={3.5}
                            newPrice={339}
                        /></div>
                    <div style={{ flex: 1 }}>
                        <ReviewMobile
                            name={'Alexender'}
                            date={'10 October 2020'}
                            rating={3.5}
                            numlikes={3}
                            newPrice={339}
                        /></div>

                </div>
            </ReviewsContainerMobile>
        </div>
    )
}