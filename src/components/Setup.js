import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import Select from '@material-ui/core/Select';

import {useDispatch, useSelector} from 'react-redux';
import {name, contacts} from '../actions'



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      textAlign: 'center',
    },
    button:{
        textAlign: 'center',
        marginTop: '20px',
    }
  }));



export default function Contacts(props) {
    const classes = useStyles();

    const Name = useSelector(state => state.name);
    const Contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    function SubmitButton() {
        if (Name && Contacts ){
            return <Button variant="contained" onClick={props.handleSetupSave}>Save</Button>
          } else {
            return <Button variant="contained" onClick={props.handleSetupSave} disabled="true">Save</Button>   
        };
    }

    return (
    <div className={classes.root}>
        <form>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className={classes.heading}>
                    <Typography variant="h5">
                        Setup
                    </Typography>
                </div>
                <Divider/>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="p">
                    <strong>Welcome</strong> to Workflow builder for automated sms sender. Please enter the following details to create a new workflow.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField variant="outlined" label="Workflow Name" required="true" value={Name} onChange={ e => dispatch(name(e.target.value))}/>
            </Grid>
            <Grid item xs={12}>
                <Select variant="outlined" native defaultValue="" required="true" value={Contacts} onChange={ e => dispatch(contacts(e.target.value))}>
                    <option value="">Select the list of contacts</option>
                    <option value="Contacts A" name="contact_1">Category A</option>
                    <option value="Contacts B" name="contact_2">Category B</option>
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