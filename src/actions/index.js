//setup
export const setup = (n) => {
    return{
        type: 'SETUP',
        payload: n,
    }
}
export const name = (n) => {
    return{
        type: 'NAME',
        payload: n,
    }
}
export const contacts = (n) => {
    return{
        type: 'CONTACTS',
        payload: n,
    }
}
//delay
export const unit = (n) => {
    return{
        type: 'UNIT',
        payload: n,
    }
}
export const time = (n) => {
    return{
        type: 'TIME',
        payload: n,
    }
}
export const delay = () => {
    return{
        type: 'DELAY',
    }
}
//sms
export const smsName = (n) => {
    return{
        type: 'SMSNAME',
        payload: n,
    }
}
export const smsBody = (n) => {
    return{
        type: 'SMSBODY',
        payload: n,
    }
}
export const sms = () => {
    return{
        type: 'SMS',
    }
}
//condition
export const conditionName = (n) => {
    return{
        type: 'CONDITION_NAME',
        payload: n,
    }
}
export const condition = () => {
    return{
        type: 'CONDITION',
    }
}
export const isTrue = () => {
    return{
        type: 'TRUE'
    }
}
export const isFalse = () => {
    return{
        type: 'FALSE'
    }
}
export const dialog = (n) => {
    return{
        type: 'DIALOG',
        payload: n,
    }
}