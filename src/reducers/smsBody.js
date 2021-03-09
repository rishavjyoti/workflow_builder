const smsBodyReducer = (state = '', action) => {
    switch(action.type){
        case 'SMSBODY':
            return action.payload;
        default:
            return state;
    }
}
export default smsBodyReducer;