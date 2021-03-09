const smsNameReducer = (state = '', action) => {
    switch(action.type){
        case 'SMSNAME':
            return action.payload;
        default:
            return state;
    }
}
export default smsNameReducer;