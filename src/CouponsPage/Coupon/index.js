import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import './../../index.css';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: '1.125rem',
        color: '#989898',
        fontFamily: 'Roboto-Regular',
        paddingBottom: '0.5rem'
    },
    pos: {
        marginBottom: 12,
    },
    cover: {
        width: 200,
        height: 150
    },
    body: {
        fontSize: '1rem',
        fontFamily: 'Roboto-Regular',
        color: '#1D1D1D'
    },
    more: {
        fontSize: '1rem',
        color: '#00AFEF',
        fontFamily: 'Roboto-Medium',
        paddingTop: '0.5rem'
    },
    moreContent: {
        fontSize: '0.75rem',
        fontFamily: 'Roboto-Medium',
        marginTop: '0.75rem',
        color: '#5C5C5C'
    }
}));

export default function Coupon({imgSrc, Height, Width, title, content, moreContent}) {
    const classes = useStyles();
    const [showMore, setShowMore] = React.useState(false)
    const [showCode, setShowCode] = React.useState(false)

    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.root}  elevation={1}>
            <img src={imgSrc} style={{maxWidth: Width, maxHeight: Height, margin: '1rem'}} />
            
                <div style={{maxWidth: '16.25rem', margin: '1rem 0rem'}}>
                    <div className={classes.title} >
                        {title}
                    </div>
                    <div className={classes.body}>
                        {content}
                    </div>
                    {showMore==false ?<Button size="small" className={classes.more} onClick={()=>setShowMore(true)}> + More</Button>
                    :
                    <div className={classes.moreContent}>
                        Terms and Conditions
                        <br />
                        {moreContent}
                    </div>
                    }
                </div>
                {showCode==false ? 
                    <img 
                        src={require('./../../assets/Coupon/CopyCode.svg')} 
                        onClick={()=>setShowCode(true)} 
                        style={{maxWidth: '210px', margin: '1rem', cursor: 'pointer'}} 
                    />
                :
                <img src={require('./../../assets/Coupon/Path14172.svg')} style={{maxWidth: '210px', margin: '1rem'}} />
                }
            </Card>

        </Grid>
    );
}
