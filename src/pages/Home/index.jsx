import { Grid, makeStyles, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom>
            Homepage
          </Typography>
          <Typography variant="body1" gutterBottom>
            This is demo app with login, registration and updating profile flows. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
