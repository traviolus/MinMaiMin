import React from "react";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//       marginLeft: "1.75em",
//     },
//   })
// );

export default function ResultButtons() {

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Button variant="contained" size="large">
            ย้อนกลับ
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" size="large">
            ติดต่อทนาย
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
