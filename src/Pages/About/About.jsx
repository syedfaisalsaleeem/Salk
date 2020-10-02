import React from "react";
import ContactForm from "../../Components/ContactForm/ContactFrom";
import "./About.css";
import { Typography } from "@material-ui/core";

const About = () => {
  return (
    <section className="about">
      <div className="warper">
        <div className="content-info">
          <Typography variant="h4" className="title">
            About Us
          </Typography>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              quibusdam non vero dignissimos quod atque laboriosam,
              reprehenderit deserunt illum optio magnam magni harum sed
              temporibus assumenda nulla, qui pariatur! Expedita aperiam
              accusamus modi? Possimus ea, enim ducimus consectetur tenetur
              accusamus modi? Possimus ea, enim ducimus consectetur tenetur
              error nobis ullam, amet quod cum commodi sunt nesciunt sapiente
              impedit.
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default React.memo(About);
