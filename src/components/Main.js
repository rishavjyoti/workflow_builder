import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Setup from './Setup';
import Delay from './Delay';
import Sms from './Sms';
import Conditions from './Conditions';
import End from './End';
import Dialog from './Dialog'

//icons
import AlarmAddIcon from '@material-ui/icons/AlarmAdd';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';


import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
  ReactFlowProvider,
} from 'react-flow-renderer';

import {
  Switch,
  Route,
} from "react-router-dom";
import { useHistory } from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';
import {condition, delay} from '../actions'
import {setup} from '../actions'
import {sms} from '../actions'
import {isTrue, dialog} from '../actions'
import { Typography } from '@material-ui/core';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({  
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    height: '90vh',
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    width: '90vw',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[10],
    padding: theme.spacing(4, 4, 6),
    borderRadius: '5px',
    textAlign: 'center',
  },
  paper_1: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    borderRadius: '5px',
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
  },
  icon: {
    width: '30px',
    height: '30px',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

// Workflow loaded
const onLoad = (reactFlowInstance) => {
  console.log('flow loaded:', reactFlowInstance);
  reactFlowInstance.fitView();
};

var Elements = [
]

let truth = false;

export default function Main() {

  const nodeId = useSelector(state => state.nodeId);
  const x = useSelector(state => state.x);
  const y = useSelector(state => state.y);
  const name = useSelector(state => state.name);
  const contacts = useSelector(state => state.contacts);
  const time = useSelector(state => state.time);
  const unit = useSelector(state => state.unit);
  const smsName = useSelector(state => state.smsName);
  const Condition = useSelector(state => state.conditionName);
  const dialogOpen = useSelector(state => state.dialogOpen);

  const dispatch = useDispatch();

  const classes = useStyles();

  const history = useHistory();

  // Handlers of modal routes to pages
  const handleDelay = () => {
    history.push('/delay');
    setOpen(false);
    };

  const handleSms = () => {
    history.push('/sms');
    setOpen(false);
  };

  const handleCondition = () => {
    history.push('/conditions');
    setOpen(false);
  };
  
  const handleEnd = () => {
    setOpen_1(false)
    const newNode = {
      id: nodeId,
      data: { label: 'END FLOW' },
      position: {
        x: x,
        y: y,
      },
      style: {
        background: '#cca8e9',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    };
    const newEdge = {
      id: "e"+(nodeId-1)+"-"+nodeId,
      source: nodeId-1,
      target: nodeId,
    };
    setElements((els) => els.concat(newNode));
    setElements((els) => els.concat(newEdge));
    console.log(elements);
    console.log(truth)
    if(truth){
      truth=false;
      dispatch(isTrue());
      setOpen(true);
      setOpen_1(false);
    }
    else{
      history.push('/end');
      dispatch(setup());
      setOpen(false);
    }
  };

  const handleCancel = () => {
    history.push('/');
    setElements(Elements);
  };
  
  // Hooks of workflow  
  const [elements, setElements] = useState(Elements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  
  // Hooks and handlers of modal
  const [open, setOpen] = React.useState(false);
  const [open_1, setOpen_1] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose_1 = () => {
    setOpen_1(false);
  };

  //Add Node for setup
  const handleSetupSave = () => {
    const newNode = {
      id: nodeId,
      data: { label: "Name:" + name + " (" + contacts +")"},
      position: {
        x: x,
        y: y,
      },
      style: {
        background: '#D6D5E6',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    };
    setElements((els) => els.concat(newNode));
    dispatch(dialog(true));
    console.log(elements);
    dispatch(setup());
    setOpen(true);
  };

  //Add Node for delay
  const handleDelaySave = () => {
    const newNode = {
      id: nodeId,
      data: { label: "Delay of " + time + " " + unit},
      position: {
        x: x,
        y: y,
      },
      style: {
        background: '#ffffd2',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    };
    const newEdge = {
      id: "e"+(nodeId-1)+"-"+nodeId,
      source: nodeId-1,
      target: nodeId,
    };
    setElements((els) => els.concat(newNode));
    setElements((els) => els.concat(newEdge));
    console.log(elements)
    dispatch(delay());
    setOpen(true);
  };

  
  //Add Node for sms
  const handleSmsSave = () => {
    const newNode = {
      id: nodeId,
      data: { label: "SMS Name:"+smsName },
      position: {
        x: x,
        y: y,
      },
      style: {
        background: '#a8e6cf',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    };
    const newEdge = {
      id: "e"+(nodeId-1)+"-"+nodeId,
      source: nodeId-1,
      target: nodeId,
    };
    setElements((els) => els.concat(newNode));
    setElements((els) => els.concat(newEdge));
    console.log(elements)
    if(truth){
      dispatch(setup());
      setOpen_1(true);
    }
    else{
      dispatch(sms());
      setOpen(true);
    }
  };

  //Add Node for condition
  const handleConditionSave = () => {
    const newNode = {
      id: nodeId,
      data: { label: "Condition:"+Condition },
      position: {
        x: x,
        y: y,
      },
      style: {
        background: '#3f72af',
        color: '#333',
        border: '1px solid #222138',
        width: 180,
      },
    };
    
    const newEdge = {
      id: "e"+(nodeId-1)+"-"+nodeId,
      source: nodeId-1,
      target: nodeId,
    };
    
    setElements((els) => els.concat(newNode));
    setElements((els) => els.concat(newEdge));
    
    truth=true;
    console.log(truth)
    dispatch(condition());
    handleSms();
    console.log(elements)
  };

 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
      {/* Router for sidebar forms */}
          <div>
            <Switch>
              <Route exact path="/">
                <Setup 
                  handleSetupSave={handleSetupSave} 
                  handleCancel={handleCancel}/>
              </Route>
              <Route exact path="/delay">
                <Delay 
                  handleDelaySave={handleDelaySave} 
                  handleCancel={handleCancel}/>
              </Route>
              <Route exact path="/sms">
                <Sms 
                  handleSmsSave={handleSmsSave} 
                  handleCancel={handleCancel}/>
              </Route>
              <Route exact path="/conditions">
                <Conditions 
                  handleConditionSave={handleConditionSave} 
                  handleCancel={handleCancel}/>
              </Route>
              <Route exact path="/end">
                <End
                  handleCancel={handleCancel}
                />
              </Route>
            </Switch>
          </div>
      </Drawer>

      {/* Reactflow */}
      
      <main className={classes.content}>
      <ReactFlowProvider>
        <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onLoad={onLoad}
        snapToGrid={true}
        snapGrid={[15, 15]}
        nodesDraggable={false}
        nodesConnectable={false}
        connectionMode={"strict"}
        >
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.style?.background) return n.style.background;
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'output') return '#ff0072';
            if (n.type === 'default') return '#1a192b';
            return '#eee';
          }}
          nodeColor={(n) => {
            if (n.style?.background) return n.style.background;
            return '#fff';
          }}
          nodeBorderRadius={3}
        />
        <Controls />
        <Background color="#00000" gap={16} />
      </ReactFlow>
      </ReactFlowProvider>
      </main>
          {/* Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableBackdropClick
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant="h4" id="transition-modal-title" gutterBottom>Select the next Node.</Typography>
            <Grid container className={classes.button} spacing={2}>
            <Grid item xs={3}>
                <Grid container variant="contained" onClick={handleDelay} className={classes.paper_1}>
                  <Grid item xs={12}>
                    <Typography variant="h6">Delay</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <AlarmAddIcon className={classes.icon}/>
                  </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container variant="contained" onClick={handleSms} className={classes.paper_1}>
                  <Grid item xs={12}>
                    <Typography variant="h6">Sms details</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <MailOutlineIcon className={classes.icon}/>
                  </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container variant="contained" onClick={handleCondition} className={classes.paper_1}>
                  <Grid item xs={12}>
                    <Typography variant="h6">Condition</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <SettingsApplicationsOutlinedIcon className={classes.icon}/>
                  </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container variant="contained" onClick={handleEnd} className={classes.paper_1}>
                  <Grid item xs={12}>
                    <Typography variant="h6">End Flow</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <CheckCircleOutlineOutlinedIcon className={classes.icon}/>
                  </Grid>
                </Grid>
            </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
      
          {/* Modal 2*/}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open_1}
        onClose={handleClose_1}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableBackdropClick
      >
        <Fade in={open_1}>
        <div className={classes.paper}>
          <Typography variant="h5" id="transition-modal-title" gutterBottom>Select the next Node if condition is true.</Typography>
          <Grid container className={classes.button} spacing={2}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <Grid container variant="contained" onClick={handleEnd} className={classes.paper_1}>
                  <Grid item xs={12}>
                    <Typography variant="h6">End Flow</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <CheckCircleOutlineOutlinedIcon className={classes.icon}/>
                  </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </div>
        </Fade>
      </Modal>
      <Dialog dialogOpen={dialogOpen}/>
    </div>
  );
}