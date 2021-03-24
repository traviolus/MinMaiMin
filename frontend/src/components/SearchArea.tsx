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
                            <RadioGroup row aria-label="สถานการณ์" name="สถานการณ์" value={situation} onChange={(e) => handleSituationChange(e.target.value)}>
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
                            <RadioGroup aria-label="ผู้เสียหาย" name="ผู้เสียหาย" value={victim} onChange={(e) => handleVictimChange(str2bool(e.target.value))}>
                                <FormControlLabel value={true} control={<Radio />} label="ยืนยันได้" />
                                <FormControlLabel value={false} control={<Radio />} label="ไม่สามารถยืนยันได้" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={5} className={classes.dropdown}>
                            มีบุคคลที่สามหรือไม่?
                            <RadioGroup aria-label="บุคคลที่สาม" name="บุคคลที่สาม" value={thirdPerson} onChange={(e) => handleThirdPersonChange(str2bool(e.target.value))}>
                                <FormControlLabel value={true} control={<Radio />} label="มี" />
                                <FormControlLabel value={false} control={<Radio />} label="ไม่มี" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={1} />
                        
                        <Grid item xs={1} />
                        <Grid item xs={5} className={classes.dropdown}>
                            ด่ากันไปมาไหม?
                            <RadioGroup aria-label="ตอบโต้" name="ตอบโต้" value={reaction} onChange={(e) => handleReactionChange(str2bool(e.target.value))}>
                                <FormControlLabel value={true} control={<Radio />} label="มีการตอบโต้กลับ" />
                                <FormControlLabel value={false} control={<Radio />} label="ไม่มีการตอบโต้" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={5} className={classes.dropdown}>
                            เป็นเหตุการณ์ในอนาคตหรือไม่?
                            <RadioGroup aria-label="อนาคต" name="อนาคต" value={future} onChange={(e) => handleFutureChange(str2bool(e.target.value))}>
                                <FormControlLabel value={true} control={<Radio />} label="เป็น" />
                                <FormControlLabel value={false} control={<Radio />} label="ไม่เป็น" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={1} />
                        
                        <Grid item xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={thLocale}>
                                <KeyboardDatePicker
                                margin='normal'
                                id="date-picker-dialog"
                                label='วันที่เกิดเหตุการณ์'
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
                            <Button variant='contained' size='large'>
                                ล้างข้อมูล
                            </Button>
                        </Grid>
                        <Grid item xs={3} />
                    </Grid>
                </FormControl>
            </form>
        </div>
    )
}