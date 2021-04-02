import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            display: 'flex',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            }
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff'
        },
        paper: {
            maxWidth: '200',
            maxHeight: '200'
        }
    })
);

export default function LoadingModal() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Backdrop className={classes.backdrop} open={true}>
                <Paper elevation={24}>
                    <CircularProgress variant='indeterminate' style={{margin: '30px'}} size={100}/>
                </Paper>
            </Backdrop>
        </div>
    );
}