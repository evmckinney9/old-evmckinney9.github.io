import React, { ReactElement, FC } from "react";
import { Box, Grid, Paper, Avatar, Typography, Theme } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    avatar: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  })
);

const Home: FC<any> = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="stretch" height="100%">
        <Grid item xs={12} sm={4} height="100%">
          <Paper className={classes.paper}>
            <Avatar
              alt="My Headshot"
              src="prof_square.png"
              className={classes.avatar}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} height="100%">
          <Paper className={classes.paper}>
            <a href="https://github.com/evmckinney9">
              <GitHubIcon fontSize="large" />
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} height="100%">
          <Paper className={classes.paper}>
            <a href="https://linkedin.com/in/evm9">
              <LinkedInIcon fontSize="large" />
            </a>
          </Paper>
        </Grid>
      </Grid>

    </div>
  );
};

export default Home;
