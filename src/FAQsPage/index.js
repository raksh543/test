import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Header from './Header';
import Content from './Content';
import Questions from './Questions';
import Grid from '@material-ui/core/Grid';
import './../index.css';

const useStyles = makeStyles((theme) => ({

    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    subheader: {
        display: 'flex',
        flexDirection: 'row',
    },
    subHeaderButtons: {
        display: 'flex',
        flexDirection: 'row',
    },
    heading: {
        flex: 1,
        fontFamily: 'Cocon-Regular-Font',
        fontSize: '2rem',
        color: '#1D1D1D',
        margin: '1.5rem 0rem',
    },
    buttonContact: {
        height: '50px',
        width: '150px',
        borderRadius: '10px',
        background: "#ffffff",
        color: '#00AFEF',
        borderColor: '#00AFEF',
        margin: '1rem',
        '&:hover': {
            background: "#00AFEF",
            color: '#ffffff',
        }
    },
}));

export default function FAQsPage() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Container >

                <div className={classes.root}>
                    <Header />
                    <div className={classes.subheader}>
                        <div className={classes.heading}>Frequently Asked Questions</div>
                        <div className={classes.subHeaderButtons}>
                            <span style={{color: '#5c5c5c', cursor: 'pointer', width: '100px', marginTop: '30px'}}>Still need help?</span>
                            <Button variant="outlined" className={classes.buttonContact}> Contact us </Button>
                        </div>
                    </div>
                    <Content />
                    <Grid container spacing={3}>
                        <Questions 
                            question={'Why should I prefer mamaearth, over many products available in the markets?'}
                            answer={'Toxins are chemicals used in and other products for various purposes, some as preservatives and others as dyes, fragrances, actives etc. Multiple studies have revealed that these toxins can have many side effects some of which are life-threatening. Constant use of some toxins like formaldehyde, 1-4 dioxane, parabens etc has found to be leading to cancer. Other side-effects include learning disabilities, eczema, skin aging & early puberty.'}
                        />
                        <Questions 
                            question={'Why should I prefer mamaearth, over many products available in the markets?'}
                            answer={'Toxins are chemicals used in and other products for various purposes, some as preservatives and others as dyes, fragrances, actives etc. Multiple studies have revealed that these toxins can have many side effects some of which are life-threatening. Constant use of some toxins like formaldehyde, 1-4 dioxane, parabens etc has found to be leading to cancer. Other side-effects include learning disabilities, eczema, skin aging & early puberty.'}
                        />
                        <Questions 
                            question={'Why should I prefer mamaearth, over many products available in the markets?'}
                            answer={'Toxins are chemicals used in and other products for various purposes, some as preservatives and others as dyes, fragrances, actives etc. Multiple studies have revealed that these toxins can have many side effects some of which are life-threatening. Constant use of some toxins like formaldehyde, 1-4 dioxane, parabens etc has found to be leading to cancer. Other side-effects include learning disabilities, eczema, skin aging & early puberty.'}
                        />
                        <Questions 
                            question={'Why should I prefer mamaearth, over many products available in the markets?'}
                            answer={'Toxins are chemicals used in and other products for various purposes, some as preservatives and others as dyes, fragrances, actives etc. Multiple studies have revealed that these toxins can have many side effects some of which are life-threatening. Constant use of some toxins like formaldehyde, 1-4 dioxane, parabens etc has found to be leading to cancer. Other side-effects include learning disabilities, eczema, skin aging & early puberty.'}
                        /><Questions 
                        question={'Why should I prefer mamaearth, over many products available in the markets?'}
                        answer={'Toxins are chemicals used in and other products for various purposes, some as preservatives and others as dyes, fragrances, actives etc. Multiple studies have revealed that these toxins can have many side effects some of which are life-threatening. Constant use of some toxins like formaldehyde, 1-4 dioxane, parabens etc has found to be leading to cancer. Other side-effects include learning disabilities, eczema, skin aging & early puberty.'}
                    />
                    <Questions 
                        question={'Why should I prefer mamaearth, over many products available in the markets?'}
                        answer={'Toxins are chemicals used in and other products for various purposes, some as preservatives and others as dyes, fragrances, actives etc. Multiple studies have revealed that these toxins can have many side effects some of which are life-threatening. Constant use of some toxins like formaldehyde, 1-4 dioxane, parabens etc has found to be leading to cancer. Other side-effects include learning disabilities, eczema, skin aging & early puberty.'}
                    />
                    <Questions 
                        question={'Why should I prefer mamaearth, over many products available in the markets?'}
                        answer={'Toxins are chemicals used in and other products for various purposes, some as preservatives and others as dyes, fragrances, actives etc. Multiple studies have revealed that these toxins can have many side effects some of which are life-threatening. Constant use of some toxins like formaldehyde, 1-4 dioxane, parabens etc has found to be leading to cancer. Other side-effects include learning disabilities, eczema, skin aging & early puberty.'}
                    />
                    <Questions 
                        question={'Why should I prefer mamaearth, over many products available in the markets?'}
                        answer={'Toxins are chemicals used in and other products for various purposes, some as preservatives and others as dyes, fragrances, actives etc. Multiple studies have revealed that these toxins can have many side effects some of which are life-threatening. Constant use of some toxins like formaldehyde, 1-4 dioxane, parabens etc has found to be leading to cancer. Other side-effects include learning disabilities, eczema, skin aging & early puberty.'}
                    />
                    </Grid>
                </div>
            </Container>
        </>
    );
}
