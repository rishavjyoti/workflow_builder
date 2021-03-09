import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      textAlign: 'center',
    },
  }));

export default function End(props) {
    const classes = useStyles();


    return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className={classes.heading}>
                    <Typography variant="h6">
                        SMS Analytics
                    </Typography>
                </div>
                <Divider/>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="p">
                    The status of messages that have been read or clicked by Subscribers.
                </Typography>
            </Grid>
            <Grid item xs={6}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    Completed
                </Grid>
                <Grid item xs={12}>
                    0
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={6}>  
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    Queue
                </Grid>
                <Grid item xs={12}>
                    0
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
                <Typography variant="p">
                    You have finished building your workflow. <strong>Still can't see it?</strong> Zoom in and then zoom out your browser window. Click <strong>reset </strong>
                    to create a new workflow.
                </Typography>
            </Grid>
        <Grid item xs={6}><Button variant="contained" disabled>Show Subscribers</Button></Grid>
        <Grid item xs={6}><Button variant="contained" onClick={props.handleCancel}>Reset</Button></Grid>
        </Grid>
    </div>
    )
}