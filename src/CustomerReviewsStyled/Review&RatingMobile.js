import React from 'react';
import styled from 'styled-components';



export default function Review({name, date, rating, newPrice, oldPrice, discount, numlikes}) {

    const [like, setLike] = React.useState('notLiked');

    const Review = styled.div`
    padding: 0;
    margin: 1rem 0 ;
    box-sizing: border-box;
    
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
    .images{
        margin-left: 4.5rem;
        display: flex;
        flex-direction: row;
        margin-top: 1rem;
        overflow: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none; 
    }
    .images::-webkit-scrollbar {
        display: none;
    }
    .details{
        margin-left: 1rem;
    };
    .like{
        display: flex;
        flex-direction: row;
        border: 1px solid #00AFEF;
        border-radius: 5px;
        align-items: center;
        padding: 5px 14px;
    };
    .bottom{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin: 1rem 1rem 0 0;
        align-items: center;
    }
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
                            <div style={{  fontFamily: 'Roboto-Medium', fontSize: '0.95rem', color: '#1D1D1D',}}>
                                {name}
                                </div>
                            <div style={{ flex: 1, fontFamily: 'Roboto-Regular', fontSize: '0.75rem', color: '#5C5C5C', marginLeft: '10px' }}>
                                {date}
                                </div>
                        </div>
                        <div className="infoTwo">
                        <div style={{ color: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#6DA523', borderRadius: '5px', padding: '3px 5px 3px 8px' }}>
                                <span style={{ color: 'white', fontFamily: 'Roboto-Bold', fontSize: '10px', marginRight: '4px' }}>
                                    {rating}
                                    </span>
                                
                                <img src={require('./../assets/Coupon/star.svg')} height="9px"/>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', fontFamily: 'Roboto-Regular', fontSize: '0.75rem', color: '#5C5C5C', marginLeft: '15px', alignItems: 'center' }}>
                                <img src={require('./../assets/Coupon/correctBlue.svg')} width='14px' height='14px' style={{ marginRight: '3px' }} />
                                <span style={{ flex: 1, }}>Verified Purchase</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ fontFamily: 'Roboto-Regular', fontSize: '0.95rem', color: '#5C5C5C', padding: '0 4.5rem 0 4.5rem' }}>
                    Its really very good to use. It gives a fair and radiant skin & also lighten the hyperpigmentation. Must try!
                    </div>
                <div className="images">
                    <img src={require('./../assets/Coupon/maxresdefault.png')} style={{ maxHeight: '100px', marginRight: '1rem' }} />
                    <img src={require('./../assets/Coupon/ubtan-face-scrub_1-2.png')} style={{ maxHeight: '100px', marginRight: '1rem'  }} />
                    <img src={require('./../assets/Coupon/maxresdefault.png')} style={{ maxHeight: '100px', marginRight: '1rem' }} />
                    <img src={require('./../assets/Coupon/ubtan-face-scrub_1-2.png')} style={{ maxHeight: '100px', marginRight: '1rem'  }} />
                </div>
                <div className="bottom">
                    <span style={{marginRight: '8px', fontSize: '0.8rem', fontFamily: 'Roboto-Bold', color: '#1D1D1D'}}>Helpful?</span>
                    <div className="like" onClick={()=> like==='notLiked' ? setLike('likes') : setLike('notLiked')}>
                    <img src={require('./../assets/Coupon/'+(like)+'.svg')} style={{ marginRight: '10px'}} />
                    <div>
                        {like==='notLiked' ? numlikes : numlikes+1}
                        
                    </div>
                    
                    </div>
                </div>
            </div>

        </Review>
    )
}