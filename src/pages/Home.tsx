import React, { ReactElement, FC } from "react";
import { Grid, Paper, Avatar, Theme } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';

import { makeStyles, createStyles } from '@mui/styles';
import { Height } from "@mui/icons-material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      background: theme.palette.primary.main,
      alignItems: "center",
      display: "flex",
      justifyContent: "center"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      background: theme.palette.secondary.main,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    paperWithoutBackground: {
      background: "none",
      padding: theme.spacing(2),
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    avatar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "auto"
    },
    button: {
      color: theme.palette.primary.dark,
      backgroundColor: "none",
      outline: "none",
      '& svg': {
        fontSize: 100
      },
      '&:before': {
        content: "",
        display: "block",
        backgroundColor: "none",
      },
      '&:after': {
        content: "",
        display: "block",
        backgroundColor: "none",
      },
      '&:link': {
        color: theme.palette.primary.main,
        backgroundColor: "none",
      },
      '&:visited': {
        color: theme.palette.primary.main,
        backgroundColor: "none",
      },
      '&:hover': {
        color: "#a0a5cd",
        backgroundColor: theme.palette.secondary.main,
      },
      '&:active': {
        color: theme.palette.secondary.light,
        backgroundColor: "none",
      },
    },
  })
);


const Home: FC<any> = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4} height="100%" className={classes.paperWithoutBackground}>
        <Grid item xs={4} className={classes.paperWithoutBackground}>

          <Avatar
            alt="My Headshot"
            src="prof_square.png"
            className={classes.avatar}
          />

        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Button
              onClick={() => window.location.href = "https://github.com/evmckinney9"}
              className={classes.button}
            >
              <GitHubIcon />
            </Button>

          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>


            <Button
              onClick={() => window.location.href = "https://linkedin.com/in/evm9"}
              className={classes.button}
            >
              <LinkedInIcon />
            </Button>


          </Paper>
        </Grid>
      </Grid>

    </div >
  );
};

export default Home;
