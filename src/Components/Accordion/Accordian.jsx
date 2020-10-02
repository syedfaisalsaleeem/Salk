import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import CheckBox from "../../Components/UI/CheckBox/CheckBox";
import {Grid} from "@material-ui/core"
import "./Accordion.css";

// const Accordion = withStyles({
//   root: {
//     flexBasis: '33.33%',
//     boxShadow: "none",
//     "&:before": {
//       display: "none",
//     },
//     "&$expanded": {
//       margin: "auto",
//     },
//   },
//   expanded: {},
// })(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    fontSize: "32px",
    color: "#6b6b6b;",
    fontWeight: "500",
    lineHeight: "1.2",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      fontWeight: "bold",
    },
  },
}));

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function Accordion(props){
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return(
    <Grid container justify="flex-end">
        <Grid item xs={9} >
      <Grid container>
        <Grid item>
             <Typography className={classes.mainHeading}>{props.heading}</Typography>
      
        </Grid>
        <Grid item xs={12}>
               <Typography className="subHeading">{props.title1}</Typography>
        
        </Grid>
        <Grid item>
          <div>
          <div className="listItem">
            <CheckBox checked={props.t1} />
            <Typography
              className="liText"
              style={{
                color: "#6b6b6b",
                fontSize: "14px",
                fontFamily: "Airbnb Light",
              }}
            >
              {props.text1}
            </Typography>
          </div>
          <div className="listItem">
            <CheckBox checked={props.t2} />
            <Typography
              className="liText"
              style={{
                color: "#6b6b6b",
                fontSize: "14px",
                fontFamily: "Airbnb Light",
              }}
            >
              {props.text2}
            </Typography>
          </div>
          <div className="listItem">
            <CheckBox checked={props.t2} />
            <Typography
              className="liText"
              style={{
                color: "#6b6b6b",
                fontSize: "14px",
                fontFamily: "Airbnb Light",
              }}
            >
              {props.text3}
            </Typography>
          </div>
          </div>      
        </Grid>
      </Grid>
    </Grid>
    </Grid>
  )
}
// export default React.memo(function CustomizedAccordions(props) {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState("panel1");

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   return (
//     <Grid item >
//       <Grid container>
//         <Grid item>
//              <Typography className={classes.mainHeading}>{props.heading}</Typography>
      
//         </Grid>
//       </Grid>
//     </Grid>
    
    // <div className="Accordion">
    //   <div style={{ marginLeft: "5rem" , width: '100%'}}>
    //     <Typography className={classes.mainHeading}>{props.heading}</Typography>
    //   </div>
      
    //   <Accordion 
    //   style={{background:"yellow"}}
    //     square
    //     expanded={expanded === "panel1"}
    //     onChange={handleChange("panel1")}
    //   >
    //     <AccordionSummary >
    //       <Typography className="subHeading"style={{background:"green"}}>{props.title1}</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <div>
    //       <div className="listItem">
    //         <CheckBox checked={props.t1} />
    //         <Typography
    //           className="liText"
    //           style={{
    //             color: "#6b6b6b",
    //             fontSize: "14px",
    //             fontFamily: "Airbnb Light",
    //           }}
    //         >
    //           {props.text1}
    //         </Typography>
    //       </div>
    //       <div className="listItem">
    //         <CheckBox checked={props.t2} />
    //         <Typography
    //           className="liText"
    //           style={{
    //             color: "#6b6b6b",
    //             fontSize: "14px",
    //             fontFamily: "Airbnb Light",
    //           }}
    //         >
    //           {props.text2}
    //         </Typography>
    //       </div>
    //       <div className="listItem">
    //         <CheckBox checked={props.t2} />
    //         <Typography
    //           className="liText"
    //           style={{
    //             color: "#6b6b6b",
    //             fontSize: "14px",
    //             fontFamily: "Airbnb Light",
    //           }}
    //         >
    //           {props.text3}
    //         </Typography>
    //       </div>
    //       </div>
    //     </AccordionDetails>
    //     <AccordionDetails>

    //     </AccordionDetails>
    //     <AccordionDetails>

    //     </AccordionDetails>
    //   </Accordion>
    //   {/* <Accordion
    //     square
    //     expanded={expanded === "panel2"}
    //     onChange={handleChange("panel2")}
    //   >
    //     <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
    //       <Typography className="subHeading">{props.title2}</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <div className="listItem">
    //         <CheckBox checked={props.t2} />
    //         <Typography
    //           className="liText"
    //           style={{
    //             color: "#6b6b6b",
    //             fontSize: "14px",
    //             fontFamily: "Airbnb Light",
    //           }}
    //         >
    //           {props.text2}
    //         </Typography>
    //       </div>
    //     </AccordionDetails>
    //   </Accordion> */}

    //   {/* {props.title3 && (
    //     <Accordion
    //       square
    //       expanded={expanded === "panel3"}
    //       onChange={handleChange("panel3")}
    //     >
    //       <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    //         <Typography className="subHeading">{props.title2}</Typography>
    //       </AccordionSummary>
    //       <AccordionDetails>
    //         <div className="listItem">
    //           <CheckBox checked={props.t3} />
    //           <Typography
    //             className="liText"
    //             style={{
    //               color: "#6b6b6b",
    //               fontSize: "14px",
    //               fontFamily: "Airbnb Light",
    //             }}
    //           >
    //             {props.text3}
    //           </Typography>
    //         </div>
    //       </AccordionDetails>
    //     </Accordion>
    //   )} */}
     
    // </div>
    
//   );
// });
