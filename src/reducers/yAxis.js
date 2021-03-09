const yReducer = (state = 100, action) => {
    switch(action.type){
        case 'SETUP':
            return state + 75;
        case 'DELAY':
            return state + 50;
        case 'SMS':
            return state + 50;
        case 'CONDITION':
            return state + 50; 
        case 'TRUE':
            return state + 0; 
        default:
            return state;
    }
}
export default yReducer;