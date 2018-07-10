import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import iconPlay from "./photos/iconPlay.png";
import iconAward from "./photos/iconAward.png";
import iconTruck from "./photos/iconTruck.png";
import backsplash from "./photos/topShapes.png";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    padding: "60px 0 60px 0",
    backgroundColor: theme.status.cream
  },
  item: {
    flexBasis: "70%",
    padding: 30,
    textAlign: "center",
    backgroundImage: `url("${backsplash}")`,
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "20%"
    }
  },
  underline: {
    paddingBottom: 15,
    borderBottom: "1px solid",
    borderBottomColor: theme.palette.secondary.main
  },
  subtitle: {
    paddingTop: 15,
    borderTop: "1px solid",
    borderTopColor: theme.palette.secondary.main
  },
  title: {
    width: "100%",
    paddingBottom: 60
  },
  icon: {
    height: 180,
    width: 180,
    paddingBottom: 30
  }
});

const Why = props => {
  let { classes } = props;
  return (
    <div className={classes.root}>
      <Typography
        variant="display1"
        color="textSecondary"
        align="center"
        className={classes.title}
      >
        Why Pup Athletic Club?
      </Typography>
      <div className={classes.item}>
        <img src={iconPlay} alt="Daily Hikes" className={classes.icon} />
        <Typography
          variant="title"
          color="textSecondary"
          gutterBottom
          className={classes.underline}
        >
          Daily Hikes
        </Typography>
        <Typography
          variant="subheading"
          color="textSecondary"
          className={classes.subtitle}
        >
          We hike Monday through Friday on outdoor trails so your pet can run to
          their hearts content.
        </Typography>
      </div>
      <div className={classes.item}>
        <img src={iconAward} alt="Professional Care" className={classes.icon} />
        <Typography
          variant="title"
          color="textSecondary"
          gutterBottom
          className={classes.underline}
        >
          Professional Care
        </Typography>
        <Typography
          variant="subheading"
          color="textSecondary"
          className={classes.subtitle}
        >
          Our hikers have studied dog behavior and are certified in pet CRP and
          rattlesnake training.
        </Typography>
      </div>
      <div className={classes.item}>
        <img
          src={iconTruck}
          alt="Front Door Service"
          className={classes.icon}
        />
        <Typography
          variant="title"
          color="textSecondary"
          gutterBottom
          className={classes.underline}
        >
          Front Door Service
        </Typography>
        <Typography
          variant="subheading"
          color="textSecondary"
          className={classes.subtitle}
        >
          We know you are busy, so we pick up and drop off your dog at your home
          at times that are convenient for your schedule.
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(Why);
