import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#000",
    fontSize: "14px",
    padding: "0 1rem",
    textTransform: "capitalize",
    textAlign: "center",
    width: "100%",
  },
}));

const NavItem = (props) => {
  const classes = useStyles();
  return (
    <Link className={classes.link} to={props.path}>
      {props.text}
    </Link>
  );
};

export default React.memo(NavItem);
