import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import Select from '@material-ui/core/Select';

import {useDispatch, useSelector} from 'react-redux';
import {conditionName} from '../actions'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      textAlign: 'center',
    },
    button:{
        textAlign: 'center',
        marginTop: '20px',
    },
  }));

export default function Conditions(props) {
    const classes = useStyles();

    const Condition = useSelector(state => state.conditionName);
    const dispatch = useDispatch();

    function SubmitButton() {
        if (Condition){
            return <Button variant="contained" onClick={props.handleConditionSave}>Save</Button>
          } else {
            return <Button variant="contained" onClick={props.handleConditionSave} disabled="true">Save</Button>   
        };
    }

    return (
    <div className={classes.root}>
        <form>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className={classes.heading}>
                    <Typography variant="h5">
                        Conditions
                    </Typography>
                </div>
                <Divider/>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="p">
                    Enter the <strong>condition</strong> to be checked.  
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Select variant="outlined" native defaultValue=""  required="true" value={Condition} onChange={ e => dispatch(conditionName(e.target.value))}>
                    <option value="">Select the condition</option>
                    <option value="Sms is clicked" name="clicked">Sms is clicked.</option>
                    <option value="Sms is read" name="read">Sms is read.</option>
                </Select>
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