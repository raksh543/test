import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Review from './Review';

const useStyles = makeStyles((theme) => ({

    root: {
        boxSizing: 'border-box'
    },
    buttonHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '1rem 0'
    },

}));


export default function CustomerReviews() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <img src={require('./../assets/Coupon/Group10329.png')} width='100%' />
            </div>
            <Container style={{ backgroundColor: '#ffffff', paddingTop: '16px' }}>
                <div style={{fontFamily:'Roboto-Regular', fontSize: '0.85rem', color: '#989898'}}>
                    Total :<span style={{fontFamily:'Roboto-Bold', fontSize: '1rem', color: '#5C5C5C', marginLeft: '3px'}}>1,942 Reviews</span>
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
                <div className={classes.buttonHeader}>
                    <Button
                        style={{ color: '#5C5C5C', border: '1px solid #EAEAEA', fontSize: '14px', fontFamily: 'Roboto-Regular', textTransform: 'none' }}
                        endIcon={<ExpandMoreIcon />}
                    >
                        All Reviews
                    </Button>
                    <Button
                        style={{ color: '#00AFEF', fontSize: '14px', fontFamily: 'Roboto-Medium', textTransform: 'none' }}
                        endIcon={<img src={require('./../assets/Coupon/awesome-sort-amount-down-alt.svg')} />}
                    >
                        Most Helpful
                    </Button>
                </div>
                <Grid container spacing={3}>
                    <Review />
                    <Review />
                    <Review />
                </Grid>
                    <hr
                    style={{
                        color: '#EAEAEA',
                        backgroundColor: '#EAEAEA',
                        border: '0px',
                        height: 1,
                        margin: '1rem 0'
                    }}
                />
                <Grid container spacing={3}>
                    <Review />
                    <Review />
                    <Review />
                </Grid>
                    <hr
                    style={{
                        color: '#EAEAEA',
                        backgroundColor: '#EAEAEA',
                        border: '0px',
                        height: 1,
                        margin: '1rem 0'
                    }}
                />
            </Container>
            <CssBaseline />
        </>
    )
}