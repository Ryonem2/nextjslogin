import { combineReducers } from 'redux'

import login from './Login/reducer'
import register from './Register/reducer'
import navbar from './Navbar/reducer'

export default combineReducers({
    login,
    register,
    navbar
})