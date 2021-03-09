import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import Select from '@material-ui/core/Select';

import {useDispatch, useSelector} from 'react-redux';
import {unit, time} from '../actions'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      textAlign: 'center',
      width: '280px',
    },
    button:{
        textAlign: 'center',
        marginTop: '20px',
    },
  }));

export default function Delay(props) {
    const classes = useStyles();

    const Unit = useSelector(state => state.unit);
    const Time = useSelector(state => state.time);
    const dispatch = useDispatch();

    function SubmitButton() {
        if (Unit && Time ){
            return <Button variant="contained" onClick={props.handleDelaySave}>Save</Button>
          } else {
            return <Button variant="contained" onClick={props.handleDelaySave} disabled="true">Save</Button>   
        };
    }
  
    return (
    <div className={classes.root}>
        <form>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className={classes.heading}>
                    <Typography variant="h5">
                        Delay
                    </Typography>
                </div>
                <Divider/>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="p">
                    Enter the time of <strong>delay</strong> for sending the sms.  
                </Typography>
            </Grid>
            <Grid item xs={9}>
                <Select variant="outlined" native defaultValue="" value={Unit} onChange={ e => dispatch(unit(e.target.value))}>
                    <option value="">Select the time for delay</option>
                    <option value="Hours">Hours</option>
                    <option value="Days">Days</option>
                </Select>
            </Grid>
            <Grid item xs={3}>
                <TextField variant="outlined" type="number" native label="" value={Time} onChange={ e => dispatch(time(e.target.value))}/> 
            </Grid>
            <Grid container className={classes.button} spacing={2}>
            <Grid item xs={6}>
                <SubmitButton/>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" onClick={props.handleCancel}>Cancel</Button>
            </Grid>
          </Grid>
        </Grid>
        </form>
    </div>
    )
}