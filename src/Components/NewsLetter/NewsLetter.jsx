import React from "react";

import { Grid, Button } from "@material-ui/core";

import "./NewsLetter.css";

const NewsLetter = (props) => {
  return (
    <div className="news-letter">
      <Grid container alignItems="center" justify="center">
        <Grid item className="content">
          <p>Stay in the know.</p>
          <p>Keep up-to-date with news about our</p>
          <p>launch, health tips and promotions.</p>
        </Grid>
        <Grid item sm="12" md="7">
          <Grid item container justify="center">
            <Grid item md="8">
              <input type="email" placeholder="Your Email Address" required />
            </Grid>
            <Grid item md="3">
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
