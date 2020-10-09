import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './../../index.css'

const useStyles = makeStyles((theme) => ({

    content: {
        color: '#818181',
        fontFamily: 'Roboto-Regular',
        fontSize: '0.9rem'
    }
}));

const Content = () => {
    const classes = useStyles();
    return(
        <div className={classes.content}>
            This privacy policy has been compiled to better serve those who are concerned with how their ‘Personally Identifiable
             Information’ (PII) is being used online. PII is information that can be used on its own or with other information to identify, 
             contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a
             clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with 
             our website.
        </div>
    )
}

export default Content;