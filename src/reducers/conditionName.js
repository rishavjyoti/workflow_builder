const conditionNameReducer = (state = '', action) => {
    switch(action.type){
        case 'CONDITION_NAME':
            return action.payload;
        default :
            return state;
    }
}
export default conditionNameReducer;