const nodeIdReducer = (state = 1, action) => {
    switch(action.type){
        case 'SETUP':
            return state + 1;
        case 'DELAY':
            return state + 1;
        case 'SMS':
            return state + 1;   
        case 'CONDITION':
            return state + 1;  
        case 'TRUE':
            return state + 1;
        default:
            return state;
    }
}
export default nodeIdReducer;