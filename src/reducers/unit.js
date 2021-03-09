const unitReducer = (state = '', action) => {
    switch(action.type){
        case 'UNIT':
            return action.payload;
        default:
            return state;
    }
}
export default unitReducer;