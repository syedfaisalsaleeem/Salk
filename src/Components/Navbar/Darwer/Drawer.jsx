import React from "react";
import clsx from "clsx";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import NavItem from "../NavItem/NavItem";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../../assets/images/footer-logo.png";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
  title: {
    color: theme.palette.logo,
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "1rem 0",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#000",
    display: "none",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default React.memo(function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ left: open });
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.logo}>
        <img
          src={logo}
          alt=""
          style={{ width: "2.5rem", marginRight: "0.5rem" }}
        />
        <Typography className={classes.title} align="center">
          Productly
        </Typography>
      </div>
      <List>
        {[
          { text: "Home", path: "/" },
          { text: "About", path: "/about" },
          
        ].map((el) => (
          <ListItem button key={el.text}>
            <NavItem text={el.text} path={el.path} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <div className={classes.menuButton} onClick={toggleDrawer(true)}>
          <MenuIcon />
        </div>
        <Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
});
