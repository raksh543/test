import React from 'react';
import styled from 'styled-components';


export default function Review({ name, date, rating, newPrice, oldPrice, discount }) {
    
const Button = styled.button`
    cursor: pointer;
    font-family: Roboto-Medium;
    font-size: 14px;
    color: #00AFEF;
    border: 1px solid #D4D4D4;
    border-radius: 5px; 
    margin-left: 10px;
    background-color: #ffffff;
    padding: 8px 16px;
`;

const Avatar = styled.img`
    margin: 1rem  0 0 1.5rem;
    width: 70px;
    height: 70px;
    borderRadius: 50%;
`;
const Review = styled.div`
    margin: 1rem 1rem;

    .buttonHeader {
        display: flex;
        justify-content: space-between;
    };
    .paper {
        display: flex;
        flex-direction: column;
        background-color: #F8F8F8;
        border-radius: 5px;
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
        margin: 0.7rem 0;
        align-items: center;
    };
    .card{
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        padding: 1rem 1rem 1rem 1rem;
        margin-top: 1rem;
        border: 1px solid #EAEAEA;
        border-radius: 0 0 5px 5px;
    };
    .details{
        margin-left: 1rem;
    };
    .name{

    };
    .date{

    };
    .rating{

    };
`;

    const [value, setValue] = React.useState(2);
    return (
        <Review>
            <div className="paper">
                <Avatar alt="Remy Sharp"
                    src={require('./../assets/Coupon/istockphoto-614507060-612x612@2x.png')}
                />
                <div style={{ margin: '0 15px', alignItems: 'center' }}>
                    <div style={{ flex: 1, fontFamily: 'Roboto-Medium', fontSize: '0.95rem', color: '#1D1D1D', minWidth: '100px', maxWidth: '150px', marginTop: '10px' }}>
                        {name}
                    </div>
                    <div style={{ flex: 1, fontFamily: 'Roboto-Regular', fontSize: '0.75rem', color: '#5C5C5C',marginTop: '10px' }}>
                        {date}
                    </div>
                    <div className="infoTwo">
                        <div style={{ color: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#6DA523', borderRadius: '5px', padding: '3px 5px 3px 8px' }}>
                            <span style={{ color: 'white', fontFamily: 'Roboto-Bold', fontSize: '10px', marginRight: '4px' }}>
                                {rating}
                            </span>

                            <img src={require('./../assets/Coupon/star.svg')} height="9px" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', fontFamily: 'Roboto-Regular', fontSize: '0.75rem', color: '#5C5C5C', marginLeft: '15px', alignItems: 'center' }}>
                            <img src={require('./../assets/Coupon/correctBlue.svg')} width='14px' height='14px' style={{ marginRight: '3px' }} />
                            <span style={{ flex: 1, }}>Verified</span>
                        </div>
                    </div>
                </div>
                <div style={{ fontFamily: 'Roboto-Regular', fontSize: '0.95rem', color: '#5C5C5C', padding: '0 1rem' }}>
                    Its really very good to use. It gives a fair and radiant skin & also lighten the hyperpigmentation. Must try!
                    </div>
                <div className="card">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <img src={require('./../assets/Coupon/ubtan-face-scrub_1-2.png')} style={{ maxHeight: '50px' }} />
                        <div style={{ fontFamily: 'Roboto-Regular', fontSize: '12px', color: '#3D3D3D', marginLeft: '10px' }}>
                            Skin Illuminate Face Serum for Radiant Skin with...
                        </div>
                        
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '12px' }}>
                    <div style={{ fontFamily: 'Roboto-Medium', color: '#1D1D1D', fontSize: '14px', marginLeft: '10px' }}>₹{newPrice}</div>
                        <Button>
                            + ADD
                        </Button>
                    </div>
                </div>

            </div>

        </Review>
    )

    

}