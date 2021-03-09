import { combineReducers } from 'redux';
import nodeIdReducer from './nodeId';
import xReducer from './xAxis';
import yReducer from './yAxis';
import nameReducer from './workflowName';
import contactsReducer from './contacts';
import unitReducer from './unit';
import timeReducer from './time';
import smsNameReducer from './smsName';
import smsBodyReducer from './smsBody';
import conditionNameReducer from './conditionName'
import dialogOpenReducer from './dialogOpen'


const allReducers = combineReducers({
    nodeId: nodeIdReducer,
    x: xReducer,
    y: yReducer,
    name: nameReducer,
    contacts: contactsReducer,
    unit: unitReducer,
    time: timeReducer,
    smsName: smsNameReducer,
    smsBody: smsBodyReducer,
    conditionName: conditionNameReducer,
    dialogOpen: dialogOpenReducer,
});

export default allReducers;