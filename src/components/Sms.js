import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';


import {useDispatch, useSelector} from 'react-redux';
import {smsBody, smsName} from '../actions'


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

export default function Sms(props) {
    const classes = useStyles();

    const Name = useSelector(state => state.smsName);
    const Body = useSelector(state => state.smsBody);
    const dispatch = useDispatch();
    
    function SubmitButton() {
        if (Name && Body ){
            return <Button variant="contained" onClick={props.handleSmsSave}>Save</Button>
          } else {
            return <Button variant="contained" onClick={props.handleSmsSave} disabled="true">Save</Button>   
        };
    }

    return (
    <div className={classes.root}>
        <form>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className={classes.heading}>
                    <Typography variant="h5">
                        SMS Details
                    </Typography>
                </div>
                <Divider/>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="p">
                    Enter the <strong>details</strong> of the sms to be sent.  
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField variant="outlined" label="SMS Name" required="true" value={Name} onChange={ e => dispatch(smsName(e.target.value))}/>
            </Grid>
            <Grid item xs={12}>
                <TextField variant="outlined" label="SMS Body" required="true" value={Body} onChange={ e => dispatch(smsBody(e.target.value))}/>
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