import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import StarIcon from '@material-ui/icons/Star';
import CardContent from '@material-ui/core/CardContent';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({

    root: {
        boxSizing: 'border-box',
    },
    buttonHeader: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    customerInfo: {
        display: 'flex',
        flexDirection: 'row',
    },
    infoOne: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoTwo: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0.1rem 0',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#F8F8F8',
        display: 'flex',
        flexDirection: 'row',
        padding: '20px 20px 30px 10px',
        border: '1px solid #EAEAEA'
    },
    details: {
        marginLeft: '30px'
    }
}));


export default function Review() {
    const [value, setValue] = React.useState(2);
    const classes = useStyles();

    const theme = useTheme();
    return (
        <>
            <Grid item xs={4}>
                <Paper className={classes.paper} elevation={0}>
                    <div className={classes.customerInfo}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <div style={{margin: '0 15px', alignItems: 'center'}}>
                            <div className={classes.infoOne}>
                                <div style={{fontFamily: 'Roboto-Medium', fontSize: '0.95rem', color: '#1D1D1D'}}>Priyanka Patra</div>
                                <div style={{fontFamily:'Roboto-Regular', fontSize: '0.75rem', color: '#5C5C5C', marginLeft:'15px'}}>
                                    10 July 2020
                                </div>
                            </div>
                            <div className={classes.infoTwo}>
                                <div>
                                    <Rating readOnly size="small" value={value} />
                                </div>
                                <div style={{display: 'flex', flexDirection: 'row', fontFamily:'Roboto-Regular', fontSize: '0.75rem', color: '#5C5C5C', marginLeft:'15px', alignItems: 'center'}}>
                                    <img src={require('./../assets/Coupon/correct.svg')} width='14px' height='14px' style={{marginRight: '3px'}} />
                                    Verified Purchase
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{fontFamily:'Roboto-Regular', fontSize: '0.95rem', color: '#5C5C5C', margin: '4px 10px 15px 0'}}>
                        Its really very good to use. It gives a fair and radiant skin & also lighten the hyperpigmentation. Must try!
                    </div>
                    <Card className={classes.card} elevation={0}>
                        <img src={require('./../assets/Coupon/ubtan-face-scrub_1-2.png')} style={{maxHeight: '130px'}} />
                        <div className={classes.details}>
                            <div style={{fontFamily:'Roboto-Regular', fontSize: '16px', color: '#3D3D3D'}}>
                            Skin Illuminate Face Serum for Radiant Skin with...
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', margin: '10px 0', alignItems: 'center', justifyContent: 'space-evenly'}}>
                                <span style={{fontFamily: 'Roboto-Medium', color: '#1D1D1D', fontSize: '16px'}}>₹349.00</span>
                                <span style={{fontFamily: 'Roboto-Regular', color: '#B4B4B4', fontSize: '14px',textDecoration: 'line-through', marginLeft: '5px'}}>
                                    ₹349.00
                                </span>
                                <span style={{fontFamily: 'Roboto-Medium', color: '#FF0000', fontSize: '12px'}}>
                                    (3% Off)
                                </span>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#6DA523', borderRadius: '5px', width:'43px', height: '25px', padding: '2px 5px'}}>
                                    <span style={{color: 'white', fontFamily: 'Roboto-Bold', fontSize: '12px', marginRight: '2px'}}>
                                        4.5
                                    </span>
                                    <StarIcon style={{color: 'white', fontSize: 'small'}}/>
                                </div>
                                <Button style={{color: '#00AFEF', border: '1px solid #D4D4D4', borderRadius: '5px', marginLeft: '10px', backgroundColor: '#ffffff'}}>
                                   ADD TO CARD
                                </Button>
                            </div>
                        </div>

                    </Card>
                </Paper>

            </Grid>
        </>
    )
}