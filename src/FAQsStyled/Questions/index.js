import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from '@material-ui/core/Grid';
import './../../index.css';

const styles = theme => ({
  root: {
    width: "100%",
    fontFamily: 'Roboto-Regular'
  },
  heading: {
    fontSize: '1rem',
    color: '#5C5C5C'
  },
  expandedPanel: {
    color: '#92C935',
  },
  answerDiv: {
    borderLeft: '2px solid #92C935',
    paddingLeft: '1rem',
    color: '#818181',
    fontSize: '0.85rem'
  },
  iconExpanded: {
    color: '#00AFEF'
  }
});

function Questions(props) {
  const { classes } = props;
  return (
    <Grid item xs={12} sm={12} md={6}>
      <div className={classes.root}>
        <ExpansionPanel className={classes.heading}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{ color: '#00AFEF' }} />}
            classes={{ expanded: classes.expandedPanel }}
          >
            <Typography >{props.question}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.answerDiv}>
              <Typography>
                {props.answer}
              </Typography>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </Grid>
  );
}

Questions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Questions);