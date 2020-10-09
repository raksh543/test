import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import styled from 'styled-components';
import StarRating from './StarRating';
import IconStar from './StarRating/IconStar'


export default function Review() {
    const Review = styled.div`
    padding: 0;
    margin:0;
    box-sizing: border-box;
    
    .buttonHeader {
        display: flex;
        justify-content: space-between;
    },
    .paper {
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
    },
    .customerInfo {
        display: flex;
        flexDirection: row;
        padding: 1rem;
    },
    .infoOne {
        display: flex;
        flex-direction: row;
        align-items: center;
    },
    .infoTwo{
        display: flex;
        flex-direction: row;
        margin: 0.1rem 0;
        align-items: center;
    },
    .card{
        background-color: #F8F8F8;
        display: flex;
        flex-direction: row;
        padding: 0px 0px 0px 0px;
        border: 1px solid #EAEAEA
    },
    .details{
    }
    `
    const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: white;
    cursor: pointer;
    border: 0px;
    margin: 1em;
    padding: 1em 0.5em;
    color: #00AFEF;
    font-family: Roboto-Medium;
    font-size: 1rem
    `;

    const Avatar = styled.img`
        width: 44px;
        height: 44px;
        background: black;
        border-radius: 22px;
    `;
    const [value, setValue] = React.useState(2);
    return (
        <Review>
            <div className="paper">
                <div className="customerInfo">
                    <Avatar alt="Remy Sharp" src={require('./../assets/Coupon/correct.svg')}/>
                    <div style={{ margin: '0 15px', alignItems: 'center' }}>
                        <div className="infoOne">
                            <div style={{ flex: 1, fontFamily: 'Roboto-Medium', fontSize: '0.95rem', color: '#1D1D1D' }}>
                                Priyanka Patra
                                </div>
                            <div style={{ flex: 1, fontFamily: 'Roboto-Regular', fontSize: '0.75rem', color: '#5C5C5C', marginLeft: '15px' }}>
                                10 July 2020
                                </div>
                        </div>
                        <div className="infoTwo">
                            <StarRating rating={3.9}/>
                            <div style={{ display: 'flex', flexDirection: 'row', fontFamily: 'Roboto-Regular', fontSize: '0.75rem', color: '#5C5C5C', marginLeft: '15px', alignItems: 'center' }}>
                                <img src={require('./../assets/Coupon/correct.svg')} width='14px' height='14px' style={{ marginRight: '3px' }} />
                                <span style={{ flex: 1, }}>Verified Purchase</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ fontFamily: 'Roboto-Regular', fontSize: '0.95rem', color: '#5C5C5C', margin: '4px 10px 15px 0', padding: '1rem' }}>
                    Its really very good to use. It gives a fair and radiant skin & also lighten the hyperpigmentation. Must try!
                    </div>
                <div className="card">
                    <img src={require('./../assets/Coupon/ubtan-face-scrub_1-2.png')} style={{ maxHeight: '130px', margin: '1.5rem' }} />
                    <div className="details">
                        <div style={{ fontFamily: 'Roboto-Regular', fontSize: '16px', color: '#3D3D3D', margin: '1rem 1.5rem 0 0' }}>
                            Skin Illuminate Face Serum for Radiant Skin with...
                            </div>
                        <div style={{ display: 'flex', flexDirection: 'row', margin: '10px 0' }}>
                            <span style={{ fontFamily: 'Roboto-Medium', color: '#1D1D1D', fontSize: '16px' }}>₹349.00</span>
                            <span style={{ fontFamily: 'Roboto-Regular', color: '#B4B4B4', fontSize: '14px', textDecoration: 'line-through', marginLeft: '5px' }}>
                                ₹349.00
                                </span>
                            <span style={{ justifyContent: 'flex-end', flex: 1, fontFamily: 'Roboto-Medium', color: '#FF0000', fontSize: '12px' }}>
                                (3% Off)
                                </span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ color: 'white',display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#6DA523', borderRadius: '5px', width: '43px', height: '25px', padding: '2px 5px' }}>
                                <span style={{ color: 'white', fontFamily: 'Roboto-Bold', fontSize: '1rem', marginRight: '2px' }}>
                                    4.5
                                    </span>
                                <IconStar />
                            </div>
                            <Button style={{ color: '#00AFEF', border: '1px solid #D4D4D4', borderRadius: '5px', marginLeft: '10px', backgroundColor: '#ffffff' }}>
                                ADD TO CART
                                </Button>
                        </div>
                    </div>

                </div>
            </div>

        </Review>
    )
}