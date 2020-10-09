import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },

    buttons: {
        borderRadius: 50,
        background: "#ffffff",
        color: '#5C5C5C',
        margin: '1rem',
        '&:hover': {
            background: "#00AFEF",
            color: '#ffffff',
        },
    }
}));

export default function Header() {
    const classes = useStyles();
    // const [buttonColor, setButtonColor] = React.useState('#00AFEF');

    return (
        <div className={classes.root}>
            <center>
            <Button variant="outlined" className={classes.buttons}>
                FAQ's
            </Button>
            <Button variant="outlined" className={classes.buttons}>
                Return Policy
            </Button>
            <Button variant="outlined" className={classes.buttons}>
                term & condition
            </Button>
            <Button variant="outlined" className={classes.buttons}>
                Privacy Policy
            </Button>
            </center>
        </div>
    );
}
