import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Card, { CardHeader, CardContent } from "material-ui/Card";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    padding: "60px 0 60px 0",
    backgroundColor: theme.palette.primary.main
  },
  item: {
    flexBasis: "80%",
    padding: "15px 15px 0 15px",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "22%",
      padding: "0 15px 0 15px"
    }
  },
  title: {
    paddingBottom: 15,
    flexBasis: "100%"
  },
  title2: {
    paddingBottom: 35
  },
  body: {
    paddingBottom: 15
  },
  price: {
    paddingTop: 45,
    paddingBottom: 15,
    fontSize: 34,
    fontWeight: "bold"
  },
  header: {
    background: theme.status.ltGreen,
    paddingTop: 15
  },
  package: {
    paddingTop: 55
  }
});

const Price = props => {
  let { classes } = props;
  return (
    <div className={classes.root}>
      <Typography
        variant="display1"
        color="textSecondary"
        align="center"
        gutterBottom
        className={classes.title}
      >
        Plans and Pricing
      </Typography>
      <div className={classes.item}>
        <Card className={classes.card}>
          <CardHeader title="" align="center" className={classes.header} />
          <Typography
            variant="display1"
            align="center"
            color="textSecondary"
            className={classes.package}
          >
            Single<br />Package
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={classes.price}
            color="default"
          >
            <span style={{ fontSize: 20 }}>$</span>35 / week
          </Typography>
          <CardContent>
            <Typography component="p" align="center">
              One hike per Week
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className={classes.item}>
        <Card className={classes.card}>
          <CardHeader title="" align="center" className={classes.header} />
          <Typography
            variant="display1"
            align="center"
            color="textSecondary"
            className={classes.package}
          >
            Premium<br />Package
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={classes.price}
            color="default"
          >
            <span style={{ fontSize: 20 }}>$</span>100 / week
          </Typography>
          <CardContent>
            <Typography component="p" align="center">
              Three hikes per Week
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className={classes.item}>
        <Card className={classes.card}>
          <CardHeader title="" align="center" className={classes.header} />
          <Typography
            variant="display1"
            align="center"
            color="textSecondary"
            className={classes.package}
          >
            Adventure<br />Package
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={classes.price}
            color="default"
          >
            <span style={{ fontSize: 20 }}>$</span>165 / week
          </Typography>
          <CardContent>
            <Typography component="p" align="center">
              Five hikes per Week
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default withStyles(styles)(Price);
