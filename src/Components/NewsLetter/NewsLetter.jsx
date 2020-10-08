import React from "react";

import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./NewsLetter.css";
const useStyles = makeStyles((theme) => ({

  f: {
    display:"flex",
    direction:"column",
    justify:"center",
    [theme.breakpoints.down("sm")]: {
      display:"flex",
      
      justify:"flex-start"
    },
    [theme.breakpoints.down("xs")]: {
      display:"flex",
      direction: "row",
      justify:"flex-start"
    },
  },
  f1: {

    [theme.breakpoints.down("sm")]: {
      display:"flex",
      
      justify:"center"
    },

  },

}));
const NewsLetter = (props) => {
  const classes = useStyles();
  return (
    <div className="news-letter">
      <Grid container className={classes.f1} alignItems="center" justify="center" spacing="2" >
        <Grid item xs="12" sm="10" md="3"  className="content">
          <p>Stay in the know.
          Keep up-to-date with news about our
          launch, health tips and promotions.</p>
        </Grid>
        <Grid item xs="12" sm="10" md="7">
          <Grid className={classes.f} container   spacing="2">
            <Grid item md="8" sm="9" >
              <input type="email" placeholder="Your Email Address" required />
            </Grid>
            <Grid item md="3" sm="3">
              <Button className="btn" onClick={props.clicked}>
                Join Salk
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(NewsLetter);
