import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavItem from "./NavItem/NavItem";
import Drawer from "./Darwer/Drawer";
import logo from "../../assets/images/footer-logo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "none",
    background: "#fff",
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    color: "#000",
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  title: {
    flexGrow: 1,
    color: theme.palette.logo,
    fontSize: "2rem",
    fontWeight: "bold",
  },
  navItems: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  logo: {
    marginBottom: "0.2rem",
    cursor: "pointer",
  },
}));

export default React.memo(function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Link to="/">
            <img
              className={classes.logo}
              src={logo}
              style={{ width: "2.2rem", marginRight: "0.5rem" }}
              alt=""
            />
          </Link>
          <Typography className={classes.title}>
            <Link to="/">Salk</Link>
          </Typography>
          <div className={classes.navItems}>
            <NavItem path="/" text="Home" />
            <NavItem path="/about" text="About" />
            
          </div>
          <Drawer />
        </Toolbar>
      </AppBar>
    </div>
  );
});
