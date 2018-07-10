import React from "react";
import { withStyles } from "material-ui/styles";
import backsplash from "./photos/topShapes.png";
import backsplashBottom from "./photos/bottomShapes.png";
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    backgroundImage: `url("${backsplash}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundColor: theme.status.cream,
    padding: "50px 0 0 0",
    zIndex: 0,
    [theme.breakpoints.up("sm")]: {
      padding: "150px 0 0 0",
      marginTop: -135
    }
  },
  root2: {
    backgroundImage: `url("${backsplashBottom}")`,
    backgroundRepeat: "no-repeat"
  },
  title: {
    paddingTop: 25,
    fontSize: 45,
    color: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 125,
      fontSize: 120
    }
  },
  title2: {
    fontWeight: 600,
    fontSize: 30,
    paddingBottom: 30,
    paddingTop: 10,
    [theme.breakpoints.up("sm")]: {
      fontSize: 90,
      paddingBottom: 100,
      paddingTop: 30
    }
  },
  subtitle: {
    fontSize: 15,
    [theme.breakpoints.up("sm")]: {
      fontSize: 30
    }
  },
  imgBottom: {
    width: "100%"
  }
});

const Backsplash = props => {
  let { classes } = props;
  return (
    <div className={classes.root}>
      <Typography
        variant="display4"
        color="inherit"
        align="center"
        className={classes.title}
      >
        Join the PAC!
      </Typography>
      <Typography variant="display2" align="center" className={classes.title2}>
        PUP ATHLETIC CLUB
      </Typography>
      <Typography
        variant="display1"
        color="primary"
        align="center"
        className={classes.subtitle}
      >
        Professional Dog Hiking
      </Typography>
      <Typography
        variant="display1"
        color="primary"
        align="center"
        className={classes.subtitle}
      >
        for Seattle's Eastside area
      </Typography>
      <img src={backsplashBottom} className={classes.imgBottom} />
    </div>
  );
};

export default withStyles(styles)(Backsplash);
