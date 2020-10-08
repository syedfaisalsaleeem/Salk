import React,{useState,useEffect} from "react";
import {
  phone1 as phone1Data,
  phone2 as phone2Data,
  phone3 as phone3Data,
  phone4 as phone4Data,
} from "../../data";

import scr3 from "../../assets/images/Screen-3.png";

import { Grid, Typography, Button, makeStyles } from "@material-ui/core";
import showcaseImg from "../../assets/images/Top1.png";
import improveImg from "../../assets/images/Improve.png";
import consultImg from "../../assets/images/Consult.png";
import discoverImg from "../../assets/images/Discover.png";
import monitorImg from "../../assets/images/Monitor.png";
import curveImg from "../../assets/images/curveBG.png";
import Phone1 from "../../Components/Phone1/Phone1";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
  heading1: {
    color:theme.palette.main,
    fontSize: "60px",
    fontWeight: "bold",
    margin: "0",
    padding: "0",
    lineHeight: "1.2",
    [theme.breakpoints.down("lg")]: {
      fontSize: "45px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      color: "white",
      fontSize: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      color: "white",
      fontSize: "20px",
    },
  },
  heading1me: {
    color: "white",
    fontSize: "60px",
    fontWeight: "bold",
    margin: "0",
    padding: "0",
    lineHeight: "1.2",
    [theme.breakpoints.down("lg")]: {
      fontSize: "45px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      color: "white",
      fontSize: "43px",
    },
    [theme.breakpoints.down("xs")]: {
      color: "white",
      fontSize: "25px",
    },
  },
  heading2: {
    color: theme.palette.heading.hd1,
    fontSize: "25px",
    margin: "1rem 0",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      maxWidth: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      justify:"center",
      textAlign:"center",
      width:"50%"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      lineHeight: "1.2",
      marginBottom: 0,
    },
  },
  headingme: {
    color: theme.palette.heading.hd1,
    fontSize: "25px",
    marginBottom:"40px",
    marginTop:"40px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",

    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      justify:"center",
      textAlign:"center",

    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      lineHeight: "1.2",

    },
  },
  btnWarper: {
    
  },
  btn: {
    background:theme.palette.primary.main,
    width: "175px",
    height: "53px",
    textAlign: "center",
    color:"white",
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      width: "120px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      height: "40px",
      fontSize: "12px",
      color: "white",
      border:" 1px solid white",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0px",
    },
    "&:hover": {
      background: theme.palette.primary.main,
      opacity: "0.9",
    },
  },
  btnme: {
    color: "white",
    border:" 1px solid white",
    width: "175px",
    height: "53px",
    textAlign: "center",
    
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      width: "120px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      height: "45px",
      fontSize: "14px",
      color: "white",
      border:" 1px solid white",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "0px",

    },
    "&:hover": {
      background: theme.palette.primary.main,
      opacity: "0.9",
    },
  },
  heading3: {
    color: theme.palette.primary.main,
    fontSize: "35px",
    fontWeight: "bold",
    marginBottom: "72px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10rem",
    },
  },
  box: {
    maxWidth: "15rem",
    marginTop: "2rem",
    marginBottom: "4rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  mainHeadingtext: {
    fontSize: "16px",
    color: "#6b6b6b",
    opacity:"80%",
    marginLeft:"0.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      color: "#6b6b6b",
      opacity:"80%",
    },
  },
}));
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
const Home = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  return (
    <section className="home">
      {width <= 970 && (
        <Grid container style={{height:"70vh",background:"#272727"}}>
          <Grid item xs={12}>
                <Grid container  alignItems="center" direction="row" style={{height:"65vh"}}>
                  <Grid item>
                    <Grid container justify="center">
                    <Grid item >
                  <Typography data-aos="fade-up" className={classes.heading1me}>
              Your Health. Our Priority.
            </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justify="center">
                      <Grid item xs={7}>
                      <Typography data-aos="fade-up" className={classes.headingme}>
              Welcome to Salk Health, making it easier, faster, and more efficient than ever to nip your medical concerns in the bud.
            </Typography>
                      </Grid>
                    </Grid>

                    </Grid>
                    <Grid item >
                    <div data-aos="fade-up" className={classes.btnWarper}>
            <Button className={classes.btnme}>Notify me</Button>
          </div>

                    </Grid>
                    </Grid>
                  </Grid>

                </Grid>
          </Grid>
        </Grid>

      )}
      {width>970 &&(
      <Grid container className="showcaseTop">
      <Grid
        item
        xs="12"
        md="6"
        container
        direction="column"
        justify="center"
        className="showcase-top-warper"
      >
        <div className="showcase-top-content">
          <Typography data-aos="fade-up" className={classes.heading1}>
            Your Health. Our Priority.
          </Typography>
          <Typography data-aos="fade-up" className={classes.heading2}>
            Welcome to Salk Health, making it easier, faster, and more efficient than ever to nip your medical concerns in the bud.
          </Typography>
          <div data-aos="fade-up" className={classes.btnWarper}>
            <Button className={classes.btn}>Notify me</Button>
          </div>
        </div>
      </Grid>
      <Grid item xs="12" md="6">
        <img src={showcaseImg} alt="" />
      </Grid>
    </Grid>
      )}


      <div className="showcaseBottom">
        <Typography align="center" className={classes.heading3}>
        The smarter way to track your  <br /> well-being!
        </Typography>

        <Grid container justify="space-evenly">
          <Grid
            item
            sm="12"
            md="6"
            lg="2"
            container
            direction="column"
            className={classes.box}
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <Grid item>
              <img src={improveImg} alt="" />
            </Grid>
            <Grid>
              <Typography className="boxHeading">Improve</Typography>
            </Grid>
            <Grid item>
              <Typography className="boxText">
              Whether you want to crush your nutritional goals, 
              boost your heart health, or just find out why you’re so tired all the time, 
              our short questionnaire is the place to start. We’ll recommend what tests to take depending on your goals 
              and concerns, while guiding you through the entire process
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            sm="12"
            md="6"
            lg="2"
            container
            direction="column"
            className={classes.box}
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <Grid item>
              <img src={monitorImg} alt="" />
            </Grid>
            <Grid>
              <Typography className="boxHeading">Monitor</Typography>
            </Grid>
            <Grid item>
              <Typography className="boxText">
              Put your health into perspective with accurate CLIA-Certified lab 
              results reviewed by a trusted physician. With support from our 
              clinical support team, you’ll never be left in the dark when 
              it comes to your health and well-being.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            sm="12"
            md="6"
            lg="2"
            container
            direction="column"
            className={classes.box}
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <Grid item>
              <img src={consultImg} alt="" />
            </Grid>
            <Grid>
              <Typography className="boxHeading">Consult</Typography>
            </Grid>
            <Grid item>
              <Typography className="boxText">
              Your journey doesn’t end with your results. Speak to one of our medical professionals for meal tips, 
              mental health support, and beyond. With Salk Health in your pocket, anything is possible, and 
              our dieticians, doctors, and mental health specialists are only a click away.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            sm="12"
            md="6"
            lg="2"
            container
            direction="column"
            className={classes.box}
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <Grid item>
              <img src={discoverImg} alt="" />
            </Grid>
            <Grid item>
              <Typography className="boxHeading">Breathe</Typography>
            </Grid>
            <Grid item>
              <Typography className="boxText">
              With Salk Health, you never have to worry about hanging around in a busy 
              clinic or waiting for weeks for lab results. Get the perks of in-person support, 
              in a virtual landscape, all from the comfort of home.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <div className="curveBg">
          <img src={curveImg} alt="" />
        </div>
      </div>
      <div data-aos="fade-up">
        <Phone1
          height={window.innerWidth > 500 ? 1000 : 2100}
          heading={
            <div>
            <p style={{ marginBottom: "1.2rem" }}>
              Your Health At A Glance
            </p>
            
            <p className={classes.mainHeadingtext}>
            It’s never been faster or easier to create a detailed and accurate snapshot of your well-being.
            </p>
            </div>
          }
          heading1={"Your Health At A Glance"}
          phoneContent={{
            title1: "Track your results and get evidence-based feedback in as little as 2-3 days.",
            text1: "Science-based approach",
            text2: "Personalized tracking depending on your goals",
            text3:"Easy to use and refreshing interface"
          }}
          // phoneContent={{ ...phone1Data }}
          screen={phone1Data.screen}
          // heading={phone1Data.heading}
        />
      </div>
      <br />
      <br />
      <div data-aos="fade-up">
        <Phone1
          height={window.innerWidth > 500 ? 2200 : 3100}
          heading={
            <div>
            <p style={{ marginBottom: "1.2rem" }}>
            We Speak Your Language
            </p>
            
            <p className={classes.mainHeadingtext}>
            Don’t worry about jargon you can’t understand.
             We are here to improve your health outcomes while 
             educating you and breaking complex terminology down
              into simple terms.
            </p>
            </div>
          }
          heading1={"We Speak Your Language"}
          phoneContent={{
            title1: "While understanding lab results can be daunting, we break things down and educate you on all the words and numbers before you.",
            text1: "Get results that matter to you",
            text2: "Understand complex terminology",
            text3:"Gain crystal-clear clarity on your health"
          }}
          
          screen={phone2Data.screen}
          
        />
      </div>
      <br />
      <br />  
      <div data-aos="fade-up">
        <Phone1
          height={window.innerWidth > 500 ? 3000 : 4100}
          heading={
            <div>
            <p style={{ marginBottom: "1.2rem" }}>
            You Are What You Eat
            </p>
            
            <p className={classes.mainHeadingtext}>
            Food that’s healthy for one person might be poison for you. Everyone is different, which is why Salk Health creates tailored diet plans that suit your body, needs, and goals.
            </p>
            </div>
          }
          heading1={"You Are What You Eat"}
          phoneContent={{
            title1: "Get a diet plan that’s as unique as you are.",
            text1: "Personalized plans",
            text2: "Compiled by licensed dieticians",
            text3:"Vegan, keto, carnivore, and beyond"
          }}
          screen={scr3}
        />
      </div>

      <br />
      <br />
      <div data-aos="fade-up">
        <Phone1
          height={window.innerWidth > 500 ? 3800 : 4900}
          heading={
            <div>
            <p style={{ marginBottom: "1.2rem" }}>
            Track and Monitor Your Health Records
            </p>
            
            <p className={classes.mainHeadingtext}>
            With Salk Health in your pocket, your health history is just a few clicks away.
            </p>
            </div>
          }
          heading1={"Track and Monitor Your Health Records"}
          phoneContent={{
            title1: "Review and track your personal health records wherever you are.",
            text1: "Keep health interactions in reach",
            text2: "Access consultation history, prescriptions, and more",
            text3:"Contact support at a moment’s notice"
          }}
          screen={phone3Data.screen}
       
        />
      </div>
      <br />
      <br />
      <div data-aos="fade-up">
        <Phone1
          height={window.innerWidth > 500 ? 4600 : 5900}
          heading={
            <div>
            <p style={{ marginBottom: "1.2rem" }}>
            Professional Support Anytime
            </p>
            
            <p className={classes.mainHeadingtext}>
            Take advantage of our handpicked network of verified health professionals - at your service.
            </p>
            </div>
          }
          heading1={" Professional Support Anytime"}
          phoneContent={{
            title1: "Healthcare monitoring has never been this affordable or accessible. Explore our year-round care packages and choose your preferred experts from our carefully curated list.",
            text1: "Find general practitioners, mental health specialists, dieticians, dermatologists, and more.",
            text2: "Chat with medical experts without having to leave your home or office. No waiting rooms.",
            text3:"Get medical feedback from the nation’s most trusted health professionals."
          }}
          screen={phone4Data.screen}
          
        />
      </div>
      <br />
      <br />
    </section>
  );
};

export default React.memo(Home);
