import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            width: '60%',
            alignItems: 'center',
            margin: 'auto auto'
        },
        textField: {
            margin: 'auto auto'
        },
        submitButton: {
            backgroundColor: '#0561ff'
        }
    })
);

export default function SearchArea() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                    id="outlined-multiline-static"
                    label="ใส่ข้อความที่ต้องการประมวลผลที่นี่"
                    multiline
                    fullWidth={true}
                    rows={8}
                    defaultValue=""
                    variant="outlined"
                    className={classes.textField}
                    />
                </Grid>
                <Grid item xs={4}>
                    ITEM1
                </Grid>
                <Grid item xs={4}>
                    ITEM2
                </Grid>
                <Grid item xs={4}>
                    ITEM3
                </Grid>
                <Grid item xs={4}>
                    ITEM4
                </Grid>
                <Grid item xs={4}>
                    ITEM5
                </Grid>
                <Grid item xs={4}>
                    ITEM6
                </Grid>

                <Grid item xs={3} />
                <Grid item xs={3}>
                    <Button variant='contained' color='primary' size='large' className={classes.submitButton}>
                        คำนวณ
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant='contained' size='large'>
                        ล้างข้อมูล
                    </Button>
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </div>
    )
}