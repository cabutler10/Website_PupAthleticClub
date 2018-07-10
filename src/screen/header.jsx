import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import logo from "./logo.svg";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  toolBar: {
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff"
  },
  img: {
    width: 100
  }
};

class Header extends Component {
  render() {
    let { handleChangeMain, handleChangeFaq, classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolBar}>
            <img src={logo} alt="" className={classes.img} />
            <Typography
              variant="headline"
              color="secondary"
              className={classes.flex}
            >
              Pup Athletic Club
            </Typography>
            {/* <Button color="inherit" onClick={handleChangeMain}>
              Main
            </Button>
            <Button color="inherit" onClick={handleChangeFaq}>
              FAQ
            </Button> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
