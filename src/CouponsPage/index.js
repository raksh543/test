import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Coupon from './Coupon';
import './../index.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-around'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    heading: {
        fontFamily: 'Cocon-Regular-Font',
        fontSize: '2rem',
        width: '100%',
        color: '#1D1D1D',
        flexWrap: "wrap",
        margin: '1.5rem'
    }
}));

const CouponsPage = () => {
    const classes = useStyles();
    return (
        <div style={{background: '#ffffff'}}>
            <Container style={{backgroundColor: '#ffffff'}}>
                <div className={classes.heading}><center>AVAILABLE COUPONS</center></div>
                <div className={classes.root}>
                    <Grid container spacing={3}>
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
                    </Grid>
                </div>
            </Container>
            <CssBaseline />
        </div>
    )
};

export default CouponsPage;