const contactsReducer = (state = '', action) => {
    switch(action.type){
        case 'CONTACTS':
            return action.payload;
        default:
            return state;
    }
}
export default contactsReducer;