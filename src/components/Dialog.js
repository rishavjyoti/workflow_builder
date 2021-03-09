import React from 'react';
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { dialog } from '../actions';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
const dispatch = useDispatch();
const handleClose = () => {
    dispatch(dialog(false));
}
  return (
    <div>
      <Dialog
        open={props.dialogOpen}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Warning: This is a demo version! "}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            This webapp is still in development currently and it has some major bugs. One such bug is that after adding a new node, all the previous nodes 
            dissapears. To fix this problem you can zoom in and then zoom out your browser window. After that all the nodes would be visible. Thanks. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
