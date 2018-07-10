import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import GridList, { GridListTile } from "material-ui/GridList";
import image1 from "./photos/insta1.jpg";
import image2 from "./photos/insta2.jpg";
import image3 from "./photos/insta3.jpg";
import image4 from "./photos/insta4.jpg";
import image5 from "./photos/insta5.jpg";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    overflow: "hidden",
    flexWrap: "wrap",
    padding: "60px 0 30px 0",
    background: theme.palette.primary.main
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    height: 100,
    [theme.breakpoints.up("sm")]: {
      height: "100%"
    }
  },
  img: {
    width: "100%"
  }
});

const tileData = [
  {
    img: image1,
    title: "Image",
    author: "author"
  },
  {
    img: image2,
    title: "Image",
    author: "author"
  },
  {
    img: image3,
    title: "Image",
    author: "author"
  },
  {
    img: image4,
    title: "Image",
    author: "author"
  },
  {
    img: image5,
    title: "Image",
    author: "author"
  }
];

const Insta = props => {
  let { classes } = props;
  return (
    <div className={classes.root}>
      <div>
        <Typography
          variant="display1"
          color="textSecondary"
          align="center"
          gutterBottom
          className={classes.title}
        >
          Instagram
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          align="center"
          gutterBottom
          className={classes.body}
        >
          Follow us! @pupathleticclub
        </Typography>
      </div>

      <GridList className={classes.gridList} cols={5} cellHeight={350}>
        {tileData.map((photo, idx) => (
          <GridListTile key={idx}>
            <a
              href={"https://www.instagram.com/pupathleticclub/"}
              target="_blank"
            >
              <img src={photo.img} alt="" className={classes.img} />
            </a>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default withStyles(styles)(Insta);
