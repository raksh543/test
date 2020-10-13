import React from 'react';
import Coupon from './Coupon';
import CouponMobile from './CouponMobile'
import styled from 'styled-components';
import './../index.css';

const CouponsPageStyled = () => {
    const CouponContainer = styled.div`
        display: flex;
        flex: 1;
        flex-direction: column;
        margin: 0 0;
        @media (max-width: 599px){
            display: none;
        };
        .root {
            display: flex;
            flex:1;
            box-sizing: border-box;
        };
        .heading{
            font-family: Cocon-Regular-Font;
            font-size: 1.8rem;
            width: 100%;
            color: #1D1D1D;
            flex-wrap: wrap;
            margin: 1.5rem;
        };
        .container{
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
        };
        .row{
            display: flex;
            flex: 1;
            width: 100%;
            flex-wrap: wrap;
            flex-direction: row;
            box-sizing: border-box;
            margin: 0;
            justify-content: center;
        };
        .col{
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
        };
    `;
    const CouponContainerMobile = styled.div`
        display: flex;
        flex-direction: column;
        display: none;
        margin: 1rem 0;
        box-sizing: border-box;
        @media (max-width: 599px){
            display: block;
        };
        `;
    return (
        <div>
            <CouponContainer>
                <div className="heading"><center>AVAILABLE COUPONS</center></div>
                <div className="row">
                    <div className="col">
                        <Coupon
                            imgSrc={require('./../assets/Coupon/mastercard.png')}
                            Height={'50px'}
                            Width={'85px'}
                            title={'Get 30% off using Mastercard'}
                            content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                            moreContent={'Coupon code can be applied only once'}
                        />
                        <Coupon
                            imgSrc={require('./../assets/Coupon/hdfc.png')}
                            Height={'100px'}
                            Width={'85px'}
                            title={'Get 30% off using Mastercard'}
                            content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                            moreContent={'Terms and Conditions'}
                        />
                        <Coupon
                            imgSrc={require('./../assets/Coupon/axis.png')}
                            Height={'110px'}
                            Width={'85px'}
                            title={'Get 30% off using Mastercard'}
                            content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                            moreContent={'Terms and Conditions'}
                        />
                    </div>
                    <div className="col">
                        <Coupon
                            imgSrc={require('./../assets/Coupon/kotak.png')}
                            Height={'110px'}
                            Width={'85px'}
                            title={'Get 30% off using Mastercard'}
                            content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                            moreContent={'Terms and Conditions'}
                        />
                        <Coupon
                            imgSrc={require('./../assets/Coupon/icici.png')}
                            Height={'74px'}
                            Width={'85px'}
                            title={'Get 30% off using Mastercard'}
                            content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                            moreContent={'Terms and Conditions'}
                        />
                        <Coupon
                            imgSrc={require('./../assets/Coupon/sbi.png')}
                            Height={'74px'}
                            Width={'85px'}
                            title={'Get 30% off using Mastercard'}
                            content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                            moreContent={'Terms and Conditions'}
                        />
                    </div>
                </div>

            </CouponContainer>
            <CouponContainerMobile>
                <CouponMobile
                    title={'Get 30% off'}
                    content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                />
                <hr
                    style={{
                        color: '#EAEAEA',
                        backgroundColor: '#EAEAEA',
                        border: '0px',
                        height: 1,
                        margin: '1rem 0'
                    }}
                />
                <CouponMobile
                    title={'Get 30% off using Mastercard'}
                    content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                />
                <hr
                    style={{
                        color: '#EAEAEA',
                        backgroundColor: '#EAEAEA',
                        border: '0px',
                        height: 1,
                        margin: '1rem 0'
                    }}
                />
                <CouponMobile
                    title={'Get 30% off using Mastercard'}
                    content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                />
                <hr
                    style={{
                        color: '#EAEAEA',
                        backgroundColor: '#EAEAEA',
                        border: '0px',
                        height: 1,
                        margin: '1rem 0'
                    }}
                />
                <CouponMobile
                    title={'Get 30% off using Mastercard'}
                    content={'Use code MASTERCARD100 & get 30% off to Rs.100 on your 2 products above Rs.99'}
                />
                <hr
                    style={{
                        color: '#EAEAEA',
                        backgroundColor: '#EAEAEA',
                        border: '0px',
                        height: 1,
                        margin: '1rem 0'
                    }}
                />
            </CouponContainerMobile>
        </div>
    )
};

export default CouponsPageStyled;