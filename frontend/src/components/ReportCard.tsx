import React from "react";
import Paper from "@material-ui/core/Paper";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Report } from "../model/report.model";

function dateFormat(date: Date): string {
  return date.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: "0% 7.5% 5% 7.5%",
    },
    paper: {
      padding: "5px 20px",
      borderRadius: 10,
    },
  })
);
function ReportCard(props: Report) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <p style={{fontWeight: 'bold'}}>รายงานผล</p>
        <p>ประมวลกฎหมายที่เกี่ยวข้อง: {props.title ?? "หมิ่นประมาท มาตรา 326"}</p>
        <p>
          ดำเนินการฟ้องร้องได้ถึงวันที่<span> </span>
          {dateFormat(props.prescribedDate ?? new Date())}
        </p>
      </Paper>
    </div>
  );
}

export default ReportCard;
