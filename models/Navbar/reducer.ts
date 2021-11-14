const intiState = { isLogginging: false, id:'', name: '', sername:'', };
// import { stat } from 'fs';
import { SET_LOGIN } from './action'

export default function(state:any = intiState, action:any) {
    switch (action.type) {
        case SET_LOGIN:
            return {...state, isLogginging : true, id:action.payload.id, name:action.payload.name, sername:action.payload.sername}
        default:
            return state
    }
}