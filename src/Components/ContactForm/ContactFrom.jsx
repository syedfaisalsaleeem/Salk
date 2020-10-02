import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./ContactForm.css";

const formFields = [
  { label: "Sketch Reason" },
  { label: "Your Full Name" },
  { label: "Your Contact Number" },
  { label: "Your Email Address" },
];

const ContactFrom = () => {
  return (
    <div className="contact-form">
      <Grid container justify="space-between">
        <Grid item xs="12" md="5" style={{ marginTop: "2rem" }}>
          <div className="form-title">
            <i className="fa fa-comments"></i>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", color: "#2F281E" }}
            >
              Leave A Message
            </Typography>
          </div>
          <form action="">
            {formFields.map((formField) => {
              return (
                <div className="form-group" key={formField.label}>
                  <TextField
                    className="input-field"
                    label={
                      <p style={{ fontSize: "12px" }}>{formField.label}</p>
                    }
                    variant="outlined"
                  />
                </div>
              );
            })}
            <div className="form-group">
              <textarea placeholder="Your Message" />
            </div>
            <div className="form-group">
              <Button className="btn">Join Salk</Button>
            </div>
          </form>
        </Grid>
        <Grid item xs="12" md="6" style={{ marginTop: "2rem" }}>
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", color: "#2F281E" }}
          >
            Business Contacts
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "#2F281E", margin: "0.5rem 0", fontWeight: "bold" }}
          >
            Media Inquiries
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "#2F281E",
              margin: "0.5rem 0",
              fontFamily: "Airbnb Light",
            }}
          >
            press@salk.io
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "#2F281E", margin: "0.5rem 0" }}
          >
            Partnerships
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "#2F281E",
              margin: "0.5rem 0",
              fontFamily: "Airbnb Light",
            }}
          >
            partner@salk.io
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "#2F281E", margin: "0.5rem 0", fontWeight: "bold" }}
          >
            Head Office
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "#2F281E", margin: "0.5rem 0" }}
          >
            Vancouver
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "#2F281E",
              margin: "0.5rem 0",
              fontFamily: "Airbnb Light",
            }}
          >
            Graham Lee Innovation Center in the Robert H.Lee Alumni Center, 6163
            University Blvd Vancouver, BC V6T 1Z3.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(ContactFrom);
