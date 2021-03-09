const xReducer = (state = 100, action) => {
    switch(action.type){
        case 'SETUP':
            return state + 0;
        case 'DELAY':
            return state + 0;
        case 'SMS':
            return state + 0;
        case 'CONDITION':
            return state - 100;  
        case 'TRUE':
            return state + 200;
        default:
            return state;
    }
}
export default xReducer;