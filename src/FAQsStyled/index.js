import React from 'react';
import Header from './Header';
import Content from './Content';
import styled from 'styled-components';
import './../index.css';
import AccordionComponent from './AccordionComponent';

const openIcon = <img src={require('./../assets/Coupon/noun_Next_1480292(1).svg')} />
const closeIcon = <img src={require('./../assets/Coupon/close.svg')} style={{ color: '#92C935', transform: 'rotate(180deg)' }} />


const data = [
    {
        title: 'Why should I prefer mamaearth, over many products available in the markets?',
        content: 'Use Code OMG. Lower-priced product(s) in your cart will be free. NA on kits.',
        OpenIcon: openIcon,
        CloseIcon: closeIcon
    },
    {
        title: 'How do you ensure that your products have zero toxins?',
        content: 'Toxins are chemicals used in and other products for various purposes, some as preservatives and others as dyes, fragrances, actives etc. Multiple studies have revealed that these toxins can have many side effects some of which are life-threatening. Constant use of some toxins like formaldehyde, 1-4 dioxane, parabens etc has found to be leading to cancer. Other side-effects include learning disabilities, eczema, skin aging & early puberty.',
        OpenIcon: openIcon,
        CloseIcon: closeIcon
    },
    {
        title: 'What Are the Steps to Avail the Buy1Get1 Offer?',
        content: 'Add minimum two products (any) in your cart, enter code OMG. Lower-priced product(s) in your cart will be free. Continue to checkout & make the payment.',
        OpenIcon: openIcon,
        CloseIcon: closeIcon
    },
    {
        title: 'How to cancel my order?',
        content: 'Visit "My Account" to cancel your order. Order can only be canceled before it gets dispatched, post that you can refuse the order during delivery attempts.',
        OpenIcon: openIcon,
        CloseIcon: closeIcon
    },
    {
        title: 'How Can I Track My Order?',
        content: 'Order updates will be sent to you on regular basis through SMS & Email. You can also track your order here - https://mamaearth.in/order-track, post order dispatch.',
        OpenIcon: openIcon,
        CloseIcon: closeIcon
    },
    {
        title: 'What are the Shipping & COD charges?',
        content: 'For orders below Rs. 399, Shipping & COD charge of Rs. 40 each will be applicable on orders. We provide an extra 5% OFF up to Rs. 50 on all prepaid orders.',
        OpenIcon: openIcon,
        CloseIcon: closeIcon
    }
]


export default function FAQsStyled() {
    const FaqContainer = styled.div`
        padding: 1rem 10rem;
        *{
            box-sizing: border-box;
        },
        .subheader {
            display: flex;
            flex-direction: row;
        },
        .subHeaderButtons {
            display: flex;
            flex-direction: row;
        },
        .heading{
            flex: 1;
            font-family: Cocon-Regular-Font;
            font-size: 2rem;
            color: #1D1D1D;
            margin: 1.5rem 0rem;
        },

        .container{
            display: flex;
            flex-direction: column;
        },
        .row{
            display: flex;
            flex: 1,
            flex-wrap: wrap;
            flex-direction: row;
            box-sizing: border-box;
            margin: 0;
            justify-content: space-around;
        }
    `

    const Button = styled.button`
    /* Adapt the colors based on primary prop */
    cursor: pointer;
    height: 50px;
    width: 150px;
    border-radius: 10px;
    background: #ffffff;
    color: #00AFEF;
    border: 1px solid #00AFEF;
    margin: 1rem;
    font-size: 1rem;
    font-family: Roboto-Medium;

    :hover{
        background: #00AFEF;
        color: #ffffff;
    }
`;

    return (
        <FaqContainer>

            <div>
                <Header />
                <div className="subheader">
                    <div className="heading">Frequently Asked Questions</div>
                    <div className="subHeaderButtons">
                        <span style={{ fontFamily: 'Roboto-Regular', fontSize: "14px", color: '#5c5c5c', cursor: 'pointer', width: '100px', marginTop: '30px' }}>Still need help?</span>
                        <Button> Contact us </Button>
                    </div>
                </div>
                <hr
                    style={{
                        color: '#DBDBDB',
                        backgroundColor: '#DBDBDB',
                        height: '1px',
                        marginTop: '0px'
                    }}
                />
                <Content />
                <div className="container">

                    <div className="row">
                        <AccordionComponent data={data} />

                    </div>
                </div>
            </div>
        </FaqContainer>
    );
}