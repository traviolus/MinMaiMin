import React from "react";
import Paper from "@material-ui/core/Paper";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: "0% 7.5% 5% 7.5%",
    },
    paper: {
      padding: "10px 20px",
      borderRadius: 10,
    },
  })
);
export default function SimplePaper() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        รายงานผล
      </Paper>
    </div>
  );
}
