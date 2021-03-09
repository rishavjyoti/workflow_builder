const dialogOpenReducer = (state = false, action) => {
    switch(action.type){
        case 'DIALOG':
            return action.payload;
        default :
            return state;
    }
}
export default dialogOpenReducer;