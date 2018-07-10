import React from "react";
import { withStyles } from "material-ui/styles";
import backsplash from "./photos/backsplash.jpg";
import Typography from "material-ui/Typography";

const styles = {
  root: {
    backgroundImage: `url("${backsplash}")`,
    backgroundSize: "cover",
    padding: "200px 0 200px 0",
    marginTop: -64,
    zIndex: 0
  },
  tagline: {
    fontSize: 22
  },
  mainFont: {
    fontSize: 16
  }
};

const Backsplash = props => {
  let { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="display4" color="secondary" align="center">
        Join the PAC!
      </Typography>
      <Typography variant="display1" color="secondary" align="center">
        Professional Dog Hiking
      </Typography>
      <Typography variant="display1" color="secondary" align="center">
        for Seattle's Eastside area
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Backsplash);
