import React from 'react';
import styled from 'styled-components';
import StarRating from './StarRating';
import IconStar from './StarRating/IconStar'

export default function Review({name, date, rating, newPrice, oldPrice, discount}) {
    const Review = styled.div`
    padding: 0;
    margin: 2rem 0;
    box-sizing: border-box;
    max-width: 350px;
    min-width: 330px;
    
    .buttonHeader {
        display: flex;
        justify-content: space-between;
    };
    .paper {
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
    };
    .customerInfo {
        display: flex;
        flex-direction: row;
        padding: 1rem;
    };
    .infoOne {
        display: flex;
        flex:1;
        flex-direction: row;
        align-items: center;
    };
    .infoTwo{
        display: flex;
        flex-direction: row;
        margin: 0.5rem 0;
        align-items: center;
    };
    .card{
        background-color: #F8F8F8;
        display: flex;
        flex-direction: row;
        padding: 1rem 1rem 1rem 1rem;
        margin-top: 1rem;
        border: 1px solid #EAEAEA;
        border-radius: 5px;
    },
    .details{
        margin-left: 1rem;
    };
    `
    const Button = styled.button`
    cursor: pointer;
    font-family: Roboto-Medium;
    font-size: 1rem;
    color: #00AFEF;
    border: 1px solid #D4D4D4;
    border-radius: 5px; 
    margin-left: 10px;
    background-color: #ffffff;
    padding: 10px 10px;
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
                    <Avatar alt="Remy Sharp" src={require('./../assets/Coupon/istockphoto-614507060-612x612.png')} />
                    <div style={{ margin: '0 15px', alignItems: 'center' }}>
                        <div className="infoOne">
                            <div style={{ flex: 1, fontFamily: 'Roboto-Medium', fontSize: '0.95rem', color: '#1D1D1D', minWidth: '100px', maxWidth: '150px' }}>
                                {name}
                                </div>
                            <div style={{ flex: 1, fontFamily: 'Roboto-Regular', fontSize: '0.75rem', color: '#5C5C5C', marginLeft: '15px' }}>
                                {date}
                                </div>
                        </div>
                        <div className="infoTwo">
                            <StarRating rating={rating} />
                            <div style={{ display: 'flex', flexDirection: 'row', fontFamily: 'Roboto-Regular', fontSize: '0.75rem', color: '#5C5C5C', marginLeft: '15px', alignItems: 'center' }}>
                                <img src={require('./../assets/Coupon/correct.svg')} width='14px' height='14px' style={{ marginRight: '3px' }} />
                                <span style={{ flex: 1, }}>Verified Purchase</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ fontFamily: 'Roboto-Regular', fontSize: '0.95rem', color: '#5C5C5C', padding: '0 1rem' }}>
                    Its really very good to use. It gives a fair and radiant skin & also lighten the hyperpigmentation. Must try!
                    </div>
                <div className="card">
                    <img src={require('./../assets/Coupon/ubtan-face-scrub_1-2.png')} style={{ maxHeight: '130px' }} />
                    <div className="details">
                        <div style={{ fontFamily: 'Roboto-Regular', fontSize: '16px', color: '#3D3D3D' }}>
                            Skin Illuminate Face Serum for Radiant Skin with...
                            </div>
                        <div style={{ display: 'flex', flexDirection: 'row', margin: '10px 0', justifyContent: 'space-around', }}>
                            <div style={{ fontFamily: 'Roboto-Medium', color: '#1D1D1D', fontSize: '16px' }}>₹{newPrice}</div>
                            <div style={{ fontFamily: 'Roboto-Regular', color: '#B4B4B4', fontSize: '14px', textDecoration: 'line-through', marginLeft: '5px' }}>
                                ₹{oldPrice}
                                </div>
                            <div style={{fontFamily: 'Roboto-Medium', color: '#FF0000', fontSize: '12px' }}>
                                ({discount}% Off)
                                </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ color: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#6DA523', borderRadius: '5px', padding: '3px 5px 3px 8px' }}>
                                <span style={{ color: 'white', fontFamily: 'Roboto-Bold', fontSize: '1rem', marginRight: '2px' }}>
                                    {rating}
                                    </span>
                                <IconStar />
                            </div>
                            <Button>
                                ADD TO CART
                                </Button>
                        </div>
                    </div>

                </div>
            </div>

        </Review>
    )
}