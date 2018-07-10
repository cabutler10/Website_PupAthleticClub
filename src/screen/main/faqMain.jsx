import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";

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
    color: theme.palette.secondary.main,
    fontWeight: "bold"
  }
});

const FaqMain = props => {
  let { classes } = props;
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
            <Typography className={classes.heading}>
              How do I sign up?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              How does it work?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography
              gutterBottom
              variant="headline"
              color="error"
              className={classes.title}
            >
              How does the PAC work?
            </Typography>
            <Typography variant="body1" color="primary" gutterBottom>
              You choose the days of the week you would like your pup to hike.
              We then take your dog every week on your chosen days for a hiking
              adventure. We pick your dog up, take them to the trail and return
              them to you all tucked out after our hiking excursion.
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
              All of are hikes are a minimum of one hour long.
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
              dog on leash. In between this time the dogs are let off leash to
              run, play and romp to their heart's content. Only dogs with owners
              permission will be off-leash.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Why Pup Athletic Club (PAC)?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Is this suitable for my dog?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails />
        </ExpansionPanel>

        <Typography
          gutterBottom
          variant="headline"
          color="error"
          className={classes.title}
        >
          What areas do you serve?
        </Typography>
        <Typography variant="body1" color="primary" gutterBottom>
          We currently serve Bellevue, Newcastle, and Mercer Island.
        </Typography>

        <Typography
          gutterBottom
          variant="headline"
          color="error"
          className={classes.title}
        >
          How does the PAC work?
        </Typography>
        <Typography variant="body1" color="primary" gutterBottom>
          You choose the days of the week you would like your pup to hike. We
          then take your dog every week on your chosen days for a hiking
          adventure. We pick your dog up, take them to the trail and return them
          to you all tucked out after our hiking excursion.
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
          All of are hikes are a minimum of one hour long.
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
          We do combo of both. Our hikes typically start and end with the dog on
          leash. In between this time the dogs are let off leash to run, play
          and romp to their heart's content. Only dogs with owners permission
          will be off-leash.
        </Typography>

        <Typography
          gutterBottom
          variant="headline"
          color="error"
          className={classes.title}
        >
          What if my dog has never been on a trail or off-leash?
        </Typography>
        <Typography variant="body1" color="primary" gutterBottom>
          We teach basic trail commands. Your dog will start their time with us
          on leash and work their way to off-leash trail fun!
        </Typography>

        <Typography
          gutterBottom
          variant="headline"
          color="error"
          className={classes.title}
        >
          What size dogs? Is my dog too small?
        </Typography>
        <Typography variant="body1" color="primary" gutterBottom>
          No dog is too small or too large. All sizes welcome! (We have had
          small 4lb chihuahuas hike!)
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
          We can still pick up and drop off your pup. Clients can choose to make
          us a copy of a key, give us a code to your house/gate, have a
          hide-a-key, or give us access to your backyard and dog door. Whatever
          you are most comfortable with for the your safety and your pups is our
          top priority!
        </Typography>

        <Typography
          gutterBottom
          variant="headline"
          color="error"
          className={classes.title}
        >
          Can you pick up/drop off my dog to an office building?
        </Typography>
        <Typography variant="body1" color="primary" gutterBottom>
          Of course!
        </Typography>

        <Typography
          gutterBottom
          variant="headline"
          color="error"
          className={classes.title}
        >
          Is my dog too young?
        </Typography>
        <Typography variant="body1" color="primary" gutterBottom>
          As long as your dog has had all their puppy shots they can join our
          club starting on-leash. The PAC is a great way for your puppy to learn
          dog behavior and commands.
        </Typography>

        <Typography
          gutterBottom
          variant="headline"
          color="error"
          className={classes.title}
        >
          Is my dog too old?
        </Typography>
        <Typography variant="body1" color="primary" gutterBottom>
          If your dog is able to walk comfortably they can join the hikes. We
          offer slower shorter hikes for those dogs falling in the senior
          category.
        </Typography>

        <Typography
          gutterBottom
          variant="headline"
          color="error"
          className={classes.title}
        >
          How long will my dog be gone?
        </Typography>
        <Typography variant="body1" color="primary" gutterBottom>
          Dogs will typically be gone between 2.5-3 hours. This includes driving
          to and from the trail, hiking and clean up.
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
          Your dog will be out on a trail- dirt will happen. We towel off dogs
          and give them a quick brushing to the best of our ability before
          returning them to you to ensure happy dogs and happy owners.
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
          We have a 24 hour cancellation policy, you will be charged for your
          hike if you do not give us ample time. Please let us know ASAP if your
          dog can’t hike and we will happily reschedule or skip that day.
        </Typography>

        <Typography
          gutterBottom
          variant="headline"
          color="error"
          className={classes.title}
        >
          What are the requirements to hike?
        </Typography>
        <Typography variant="body1" color="primary" gutterBottom>
          We teach all off leash training and trail commands. Your dog just
          needs to be up to date on all shots/vaccines. Dogs one year and older
          are required to be spayed/neutered.
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
      </div>
    </div>
  );
};

export default withStyles(styles)(FaqMain);
