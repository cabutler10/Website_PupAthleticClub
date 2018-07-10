import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import form from "./form.pdf";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "60px 0 60px 0"
  },
  item: {
    flexBasis: "80%",
    padding: "0 15px 0 15px"
  },
  bold: {
    fontWeight: "bold",
    fontSize: 14,
    paddingBottom: 15,
    paddingTop: 15
  },
  title: {
    paddingBottom: 15,
    paddingTop: 30
  },
  title2: {
    paddingBottom: 35
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
    color: theme.palette.primary.main,
    fontWeight: "bold"
  },
  details: {
    flexDirection: "column"
  }
});

const Faq = props => {
  let { handleChangeFaq, classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.item}>
        <Typography
          gutterBottom
          variant="headline"
          color="error"
          className={classes.title}
        >
          More Information
        </Typography>
        <Typography
          variant="display1"
          color="primary"
          className={classes.title2}
        >
          Frequently Asked Questions
        </Typography>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="headline"
              color="error"
              className={classes.heading}
            >
              Why Pup Athletic Club (PAC)?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <Typography>
              Our hikers have not only a lifelong passion for dogs, but over 5
              years of experience and coursework in dog training, animal
              behavior and animal physiology.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="headline"
              color="error"
              className={classes.heading}
            >
              What is a typical hike like?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <Typography variant="body1" color="primary" gutterBottom>
              You choose the days of the week you would like your pup to hike.
              We pick your dog up, take them to the trail and return them to you
              all tuckered out after our hiking adventure.
            </Typography>
            <Typography
              gutterBottom
              variant="headline"
              color="error"
              className={classes.title}
            >
              How long are your hikes?
            </Typography>
            <Typography variant="body1" color="primary" gutterBottom>
              All of are hikes are a minimum of one hour long. However, dogs
              will typically be gone between 2.5-3 hours. This includes driving
              to and from the trail, hiking and clean up.
            </Typography>

            <Typography
              gutterBottom
              variant="headline"
              color="error"
              className={classes.title}
            >
              Do you hike on-leash or off-leash?
            </Typography>
            <Typography variant="body1" color="primary" gutterBottom>
              We do combo of both. Our hikes typically start and end with the
              dog on leash. Once on the trail, the dogs are let off leash to
              run, play and romp to their heart's content. Only dogs with owners
              permission will be off-leash.
            </Typography>

            <Typography
              gutterBottom
              variant="headline"
              color="error"
              className={classes.title}
            >
              Will my dog get dirty?
            </Typography>
            <Typography variant="body1" color="primary" gutterBottom>
              Your dog will be out on a trail- dirt will happen. We towel off
              dogs and give them a quick brushing to the best of our ability
              before returning them to you to ensure happy dogs and happy
              owners.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="headline"
              color="error"
              className={classes.heading}
            >
              Is this suitable for my dog?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <Typography variant="body1" color="primary" gutterBottom>
              We teach all off leash training and trail commands. Your dog will
              start their time with us on leash and work their way to off-leash
              trail fun! Your dog just needs to be up to date on all
              shots/vaccines. Dogs one year and older are required to be
              spayed/neutered.
            </Typography>

            <Typography
              gutterBottom
              variant="headline"
              color="error"
              className={classes.title}
            >
              What breeds to do you take?
            </Typography>
            <Typography variant="body1" color="primary" gutterBottom>
              We take all breeds as long as they pass our behavioral admittance
              test.
            </Typography>

            <Typography
              gutterBottom
              variant="headline"
              color="error"
              className={classes.title}
            >
              Does my dog need to be socialized?
            </Typography>
            <Typography variant="body1" color="primary" gutterBottom>
              Yes, your dog needs to be friendly with other dogs and people.
            </Typography>
            <Typography
              gutterBottom
              variant="headline"
              color="error"
              className={classes.title}
            >
              Is my dog too old/young?
            </Typography>
            <Typography variant="body1" color="primary" gutterBottom>
              As long as your dog has had all their puppy shots they can join
              our club starting on-leash. The PAC is a great way for your puppy
              to learn dog behavior and commands. For older dogs, we offer
              slower shorter hikes. If your dog is able to walk comfortably,
              they can join the hikes.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="headline"
              color="error"
              className={classes.heading}
            >
              How do pickups and dropoffs work?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <Typography variant="body1" color="primary" gutterBottom>
              We offer to pick up your dog at your house or office building.
              Dogs will typically be gone between 2.5-3 hours. This includes
              driving to and from the trail, hiking and clean up.
            </Typography>
            <Typography
              gutterBottom
              variant="headline"
              color="error"
              className={classes.title}
            >
              What if I’m not at the house and still want my dog to hike?
            </Typography>
            <Typography variant="body1" color="primary" gutterBottom>
              We can still pick up and drop off your pup. Clients can choose to
              make us a copy of a key, give us a code to your house/gate, have a
              hide-a-key, or give us access to your backyard and dog door.
              Whatever you are most comfortable with for the your safety and
              your pups is our top priority!
            </Typography>
            <Typography
              gutterBottom
              variant="headline"
              color="error"
              className={classes.title}
            >
              What if my dog can’t hike on their set day?
            </Typography>
            <Typography variant="body1" color="primary" gutterBottom>
              We have a 24 hour cancellation policy, you will be charged for
              your hike if you do not give us ample time. Please let us know
              ASAP if your dog can’t hike and we will happily reschedule or skip
              that day.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="headline"
              color="error"
              className={classes.heading}
            >
              How do I sign up!
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
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
              then email us the completed information at
              pupathleticclub@gmail.com. We will get back to you as soon as
              possible with more information on pricing, logistics, and details.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
};

export default withStyles(styles)(Faq);
