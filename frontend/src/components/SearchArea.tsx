import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import thLocale from "date-fns/locale/th";
import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';

const situationArray = ['inperson', 'public', 'chat', 'social', 'videocall'];

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            width: '75%',
            alignItems: 'center',
            margin: 'auto auto'
        },
        textField: {
            margin: 'auto auto'
        },
        submitButton: {
            backgroundColor: '#0561ff'
        },
        dropdown: {
            paddingLeft: '5px',
        },
        formControl: {
            margin: theme.spacing(3),
        },
        rowRadio: {
            justifyContent: 'space-around',
        }
    })
);

export default function SearchArea() {
    const classes = useStyles();
    const [date, setDate] = useState<Date | null>(new Date())
    const [text, setText] = useState<string | null>('');
    const [victim, setVictim] = useState<boolean | null>(null);
    const [thirdPerson, setThirdPerson] = useState<boolean | null>(null);
    const [situation, setSituation] = useState<number | null>(null);
    const [reaction, setReaction] = useState<boolean | null>(null);
    const [future, setFuture] = useState<boolean | null>(null);
    const [snackOpen, setSnackOpen] = useState(false);

    function handleDateChange(date: Date | null) {
        setDate(date);
    };

    function handleTextChange(e: string) {
        setText(e);
    }

    function handleVictimChange(e: boolean) {
        setVictim(e);
    }
    
    function handleThirdPersonChange(e: boolean) {
        setThirdPerson(e);
    }

    function handleSituationChange(e: string) {
        setSituation(parseInt(e));
    }

    function handleReactionChange(e: boolean) {
        setReaction(e);
    }

    function handleFutureChange(e: boolean) {
        setFuture(e);
    }

    function handleClearData() {
        setDate(new Date())
        setText('')
        setVictim(null)
        setThirdPerson(null)
        setSituation(null)
        setReaction(null) 
        setFuture(null)
        setSnackOpen(true);
    }
    
    function handleSnackClose(event: React.SyntheticEvent | React.MouseEvent, reason?: string) {
        if (reason === 'clickaway') {
            return;
        }
        setSnackOpen(false);
    };

    function handleSubmit() {
        if (typeof(situation) === 'number') {
            console.log(text, victim, thirdPerson, situationArray[situation], reaction, future, date);
        }
    }

    function str2bool(value: string) {
        if (value && typeof value === "string") {
             if (value.toLowerCase() === "true") return true;
             if (value.toLowerCase() === "false") return false;
        }
        return false;
    }

    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <Grid container spacing={3} justify='flex-start'>
                        <Grid item xs={12}>
                            <TextField
                            id="outlined-multiline-static"
                            label="ใส่ข้อความที่ต้องการประมวลผลที่นี่"
                            multiline
                            fullWidth={true}
                            rows={8}
                            defaultValue=""
                            value={text}
                            variant="outlined"
                            className={classes.textField}
                            onChange={(e) => {handleTextChange(e.target.value);}}
                            />
                        </Grid>

                        <Grid item xs={1} />
                        <Grid item xs={10} className={classes.dropdown}>
                            โดนด่ายังไง?
                            <Tooltip title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec finibus nulla, in porta eros. Nulla tempor diam a ligula laoreet, nec lobortis sapien dapibus. Integer auctor eros at ligula maximus, non faucibus ante bibendum. Nunc in interdum ex. Donec ut tristique risus. Ut varius ex vel erat dapibus, vel euismod lectus venenatis. Quisque vel nibh libero. Pellentesque et ex enim. Donec sed felis eu tortor eleifend sagittis in vitae nisi. Integer ut quam congue sem eleifend porta.">
                                <IconButton aria-label="info">
                                <InfoIcon fontSize='small' />
                                </IconButton>
                            </Tooltip>
                            <RadioGroup row className={classes.rowRadio} aria-label="สถานการณ์" name="สถานการณ์" value={situation} onChange={(e) => handleSituationChange(e.target.value)}>
                                <FormControlLabel value={0} control={<Radio />} label="ต่อหน้า" />
                                <FormControlLabel value={1} control={<Radio />} label="ในที่สาธารณะ" />
                                <FormControlLabel value={2} control={<Radio />} label="ในแชทส่วนตัว" />
                                <FormControlLabel value={3} control={<Radio />} label="โพสบนโซเชียลมีเดีย" />
                                <FormControlLabel value={4} control={<Radio />} label="โทร / วิดิโอคอล" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={1} />

                        <Grid item xs={1} />
                        <Grid item xs={5} className={classes.dropdown}>
                            ยืนยันผู้เสียหายได้?
                            <Tooltip title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec finibus nulla, in porta eros. Nulla tempor diam a ligula laoreet, nec lobortis sapien dapibus. Integer auctor eros at ligula maximus, non faucibus ante bibendum. Nunc in interdum ex. Donec ut tristique risus. Ut varius ex vel erat dapibus, vel euismod lectus venenatis. Quisque vel nibh libero. Pellentesque et ex enim. Donec sed felis eu tortor eleifend sagittis in vitae nisi. Integer ut quam congue sem eleifend porta.">
                                <IconButton aria-label="info">
                                <InfoIcon fontSize='small' />
                                </IconButton>
                            </Tooltip>
                            <RadioGroup aria-label="ผู้เสียหาย" name="ผู้เสียหาย" value={victim} onChange={(e) => handleVictimChange(str2bool(e.target.value))}>
                                <FormControlLabel value={true} control={<Radio />} label="ยืนยันได้" />
                                <FormControlLabel value={false} control={<Radio />} label="ไม่สามารถยืนยันได้" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={5} className={classes.dropdown}>
                            มีบุคคลที่สามหรือไม่?
                            <Tooltip title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec finibus nulla, in porta eros. Nulla tempor diam a ligula laoreet, nec lobortis sapien dapibus. Integer auctor eros at ligula maximus, non faucibus ante bibendum. Nunc in interdum ex. Donec ut tristique risus. Ut varius ex vel erat dapibus, vel euismod lectus venenatis. Quisque vel nibh libero. Pellentesque et ex enim. Donec sed felis eu tortor eleifend sagittis in vitae nisi. Integer ut quam congue sem eleifend porta.">
                                <IconButton aria-label="info">
                                <InfoIcon fontSize='small' />
                                </IconButton>
                            </Tooltip>
                            <RadioGroup aria-label="บุคคลที่สาม" name="บุคคลที่สาม" value={thirdPerson} onChange={(e) => handleThirdPersonChange(str2bool(e.target.value))}>
                                <FormControlLabel value={true} control={<Radio />} label="มี" />
                                <FormControlLabel value={false} control={<Radio />} label="ไม่มี" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={1} />
                        
                        <Grid item xs={1} />
                        <Grid item xs={5} className={classes.dropdown}>
                            ด่ากันไปมาไหม?
                            <Tooltip title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec finibus nulla, in porta eros. Nulla tempor diam a ligula laoreet, nec lobortis sapien dapibus. Integer auctor eros at ligula maximus, non faucibus ante bibendum. Nunc in interdum ex. Donec ut tristique risus. Ut varius ex vel erat dapibus, vel euismod lectus venenatis. Quisque vel nibh libero. Pellentesque et ex enim. Donec sed felis eu tortor eleifend sagittis in vitae nisi. Integer ut quam congue sem eleifend porta.">
                                <IconButton aria-label="info">
                                <InfoIcon fontSize='small' />
                                </IconButton>
                            </Tooltip>
                            <RadioGroup aria-label="ตอบโต้" name="ตอบโต้" value={reaction} onChange={(e) => handleReactionChange(str2bool(e.target.value))}>
                                <FormControlLabel value={true} control={<Radio />} label="มีการตอบโต้กลับ" />
                                <FormControlLabel value={false} control={<Radio />} label="ไม่มีการตอบโต้" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={5} className={classes.dropdown}>
                            เป็นเหตุการณ์ในอนาคตหรือไม่?
                            <Tooltip title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec finibus nulla, in porta eros. Nulla tempor diam a ligula laoreet, nec lobortis sapien dapibus. Integer auctor eros at ligula maximus, non faucibus ante bibendum. Nunc in interdum ex. Donec ut tristique risus. Ut varius ex vel erat dapibus, vel euismod lectus venenatis. Quisque vel nibh libero. Pellentesque et ex enim. Donec sed felis eu tortor eleifend sagittis in vitae nisi. Integer ut quam congue sem eleifend porta.">
                                <IconButton aria-label="info">
                                <InfoIcon fontSize='small' />
                                </IconButton>
                            </Tooltip>
                            <RadioGroup aria-label="อนาคต" name="อนาคต" value={future} onChange={(e) => handleFutureChange(str2bool(e.target.value))}>
                                <FormControlLabel value={true} control={<Radio />} label="เป็น" />
                                <FormControlLabel value={false} control={<Radio />} label="ไม่เป็น" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={1} />
                        
                        <Grid item xs={12}>
                            <p style={{marginBottom: '0px'}}>
                                วันที่เกิดเหตุการณ์
                                <Tooltip title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec finibus nulla, in porta eros. Nulla tempor diam a ligula laoreet, nec lobortis sapien dapibus. Integer auctor eros at ligula maximus, non faucibus ante bibendum. Nunc in interdum ex. Donec ut tristique risus. Ut varius ex vel erat dapibus, vel euismod lectus venenatis. Quisque vel nibh libero. Pellentesque et ex enim. Donec sed felis eu tortor eleifend sagittis in vitae nisi. Integer ut quam congue sem eleifend porta.">
                                    <IconButton aria-label="info">
                                    <InfoIcon fontSize='small' />
                                    </IconButton>
                                </Tooltip>
                            </p>
                            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={thLocale}>
                                <KeyboardDatePicker
                                style={{width: '15%'}}
                                margin='normal'
                                id="date-picker-dialog"
                                label=''
                                format='dd/MM/yyyy'
                                value={date}
                                onChange={dateData => handleDateChange(dateData)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>

                        <Grid item xs={3} />
                        <Grid item xs={3}>
                            <Button variant='contained' color='primary' size='large' className={classes.submitButton} onClick={handleSubmit}>
                                คำนวณ
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant='contained' size='large' onClick={handleClearData}>
                                ล้างข้อมูล
                            </Button>
                        </Grid>
                        <Grid item xs={3} />
                    </Grid>
                </FormControl>
            </form>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={snackOpen}
                autoHideDuration={6000}
                onClose={handleSnackClose}
                message="ล้างข้อมูลเสร็จสิ้น"
                action={
                <React.Fragment>
                    <Button color="secondary" size="small" onClick={handleSnackClose}>
                    ปิด
                    </Button>
                </React.Fragment>
                }
            />
        </div>
    )
}