import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import GridList, { GridListTile } from "material-ui/GridList";
import Hidden from "material-ui/Hidden";
import image1 from "./photos/sarah3.jpg";
import image5 from "./photos/sarah.jpg";
import image2 from "./photos/contact2.jpg";
import image3 from "./photos/contact3.jpg";
import image4 from "./photos/sarah2.jpg";
import form from "./form.pdf";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "60px 0 60px 0"
  },
  item: {
    flexBasis: "100%",
    padding: "0 15px 0 15px",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "40%"
    }
  },
  bold: {
    fontWeight: "bold",
    fontSize: 14,
    paddingBottom: 15,
    paddingTop: 15
  },
  title: {
    paddingBottom: 15,
    fontSize: 20,
    [theme.breakpoints.up("sm")]: {
      fontSize: 21
    }
  },
  title2: {
    paddingBottom: 15,
    fontSize: 24,
    [theme.breakpoints.up("sm")]: {
      paddingBottom: 45,
      fontSize: 38
    }
  },
  body: {
    paddingBottom: 15
  },
  img: {
    paddingTop: 30,
    paddingBottom: 30,
    width: 250
  },
  link: {
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  },
  imgXS: {
    width: "100%"
  }
});

const Contact = props => {
  let { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.item}>
        {" "}
        <Hidden smUp>
          <img src={image1} alt="" className={classes.imgXS} />
        </Hidden>
        <Hidden xsDown>
          <GridList cellHeight={300} cols={2} spacing={20}>
            <GridListTile key={1} cols={1}>
              <img src={image1} alt="" />
            </GridListTile>
            <GridListTile key={2} cols={1}>
              <img src={image2} alt="" />
            </GridListTile>
            <GridListTile key={3} cols={1}>
              <img src={image3} alt="" />
            </GridListTile>
            <GridListTile key={4} cols={1}>
              <img src={image4} alt="" />
            </GridListTile>
          </GridList>
        </Hidden>
      </div>
      <div className={classes.item}>
        <Typography
          gutterBottom
          variant="headline"
          color="error"
          className={classes.title}
        >
          Sign Up, Ask Questions, Get Information
        </Typography>
        <Typography
          variant="display1"
          color="primary"
          className={classes.title2}
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          color="primary"
          className={classes.body}
          gutterBottom
        >
          pupathleticclub@gmail.com <br />(425) 791-6655
        </Typography>
        <Typography variant="body1" color="primary" gutterBottom>
          To sign up, please download our{" "}
          <a
            href={form}
            className={classes.link}
            download="ClientInformationForm"
          >
            {" "}
            Client Information form{" "}
          </a>{" "}
          then email us the completed information. We will get back to you as
          soon as possible with the following steps.
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(Contact);
