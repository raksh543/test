import React from 'react';
import Coupon from './Coupon';
import styled from 'styled-components';
import './../index.css';

const CouponsPageStyled = () => {
    const CouponContainer = styled.div`
        .root {
            display: flex;
            flex:1;
            box-sizing: border-box;
            margin: 0 2vw;
        },
        .heading{
            font-family: Cocon-Regular-Font;
            font-size: 2rem;
            width: 100%;
            color: #1D1D1D;
            flex-wrap: wrap;
            margin: 1.5rem;
        },
        .container{
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
        },
        .row{
            width: 100%;
            display: flex;
            flex: 1;
            flex-wrap: wrap;
            flex-direction: row;
            box-sizing: border-box;
            margin: 0;
            justify-content: space-around;
        }
    `
    return (
        <CouponContainer>
            <div className="heading"><center>AVAILABLE COUPONS</center></div>
            <div className="container">
                <div className="row">

                    <Coupon
                        imgSrc={require('./../assets/Coupon/mastercard.png')}
                        Height={'50px'}
                        Width={'85px'}
                        title={'Get 30% off using Mastercard'}
                        content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                        moreContent={'Terms and Conditions'}
                    />
                    <Coupon
                        imgSrc={require('./../assets/Coupon/hdfc.png')}
                        Height={'100px'}
                        Width={'85px'}
                        title={'Get 30% off using Mastercard'}
                        content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                    />
                </div>
                <div className="row">
                    <Coupon
                        imgSrc={require('./../assets/Coupon/kotak.png')}
                        Height={'110px'}
                        Width={'85px'}
                        title={'Get 30% off using Mastercard'}
                        content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                    />
                    <Coupon
                        imgSrc={require('./../assets/Coupon/icici.png')}
                        Height={'74px'}
                        Width={'85px'}
                        title={'Get 30% off using Mastercard'}
                        content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                    />
                </div>
                <div className="row">
                    <Coupon
                        imgSrc={require('./../assets/Coupon/axis.png')}
                        Height={'110px'}
                        Width={'85px'}
                        title={'Get 30% off using Mastercard'}
                        content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                    />
                    <Coupon
                        imgSrc={require('./../assets/Coupon/sbi.png')}
                        Height={'74px'}
                        Width={'85px'}
                        title={'Get 30% off using Mastercard'}
                        content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                    />

                </div>
            </div>

        </CouponContainer>
    )
};

export default CouponsPageStyled;