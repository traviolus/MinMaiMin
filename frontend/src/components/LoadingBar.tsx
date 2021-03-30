import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

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
        }
    })
);

export default function LoadingBar(handle) {
    const classes = useStyles();
    const [progress, setProgress] = useState(0);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
        }, 600);

        return () => {
            clearInterval(timer);
            handleClose();
            handle = false;
        };
    }, []);

    return (
        <div className={classes.root}>
            {console.log(handle)}
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <CircularProgress variant='determinate' value={progress} />
            </Backdrop>
        </div>
    );
}