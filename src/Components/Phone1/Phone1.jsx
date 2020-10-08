import React, { useState, useEffect } from "react";

import { Grid,Typography } from "@material-ui/core";
import Accordian from "../Accordion/Accordian";
import CustomSlider from "../CustomSlider/CustomSlider";
import "./Phone1.css";
import scr3 from "../../assets/images/Screen-3.png";
const Phone2 = (props) => {
  const [height, setHeight] = useState(0);
  const [t1, setT1] = useState(false);
  const [t2, setT2] = useState(false);
  const [t3, setT3] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.scrollY);
    });
    // console.log(height);
  });

  useEffect(() => {
    let timer = null;
    if (height > props.height) {
      timer = setTimeout(() => {
        setT1(true);
      }, 200);
    } else {
      setT1(false);
    }
    return () => clearTimeout(timer);
  }, [height, props.height]);

  useEffect(() => {
    let timer = null;
    if (height > props.height) {
      timer = setTimeout(() => {
        setT2(true);
      }, 400);
    } else {
      setT2(false);
    }
    return () => clearTimeout(timer);
  }, [height, props.height]);

  useEffect(() => {
    let timer = null;
    if (height > props.height) {
      timer = setTimeout(() => {
        setT3(true);
      }, 600);
    } else {
      setT3(false);
    }
    return () => clearTimeout(timer);
  }, [height, props.height]);

  return (
    <section className="Phone1">
      {window.innerWidth <= 700 && (
        <div style={{paddingBottom:"55px"}} >
          <Grid item>
          <Grid container justify="center" style={{color: "#6b6b6b",fontSize: "22px"}}>
            {props.heading1}
          
          </Grid>
          </Grid>
          <Grid item xs="12" justify="center" className="mobileImg">
            <img src={props.screen} alt="" />
          </Grid>
          <Grid item xs="12"  >
            <Grid container justify="center" style={{textAlign: "center",paddingBottom:"1rem",fontWeight:"400",opacity:"70%",fontSize: "20px"}}>
              {props.phoneContent.title1}
            </Grid>
          
          </Grid>
          <Grid>
          <CustomSlider {...props.phoneContent} />
          </Grid>
          
        </div>
      )}
      {window.innerWidth > 700 && (
        <Grid
          container
          justify="space-evenly"
          alignItems="center"
          className="main-warper"
        >
          <Grid
            item
            xs="6"
            
            container
            justify="center"
           
          >
            <Accordian
              {...props}
              {...props.phoneContent}
              t1={t1}
              t2={t2}
              t3={t3}
            />
          </Grid>
          <Grid
            item
            xs="5"
          
            container
            justify="flex-start"
            className="desktopImg"
          >
            <img src={props.screen} alt="" />
          </Grid>
        </Grid>
      )}
    </section>
  );
};

export default React.memo(Phone2);
