/* eslint-disable prettier/prettier */
import reduxCall from '../utils/reduxCall'

const LOGIN_ACTION = () => {
    return async (dispatch) => {
        return reduxCall(dispatch, {
            url: 'http://127.0.0.1:5000/json/login.json',
            method: 'GET',
            name: 'LOGIN',
        })
    }
}

const REGISTER_ACTION = () => {
    return async (dispatch) => {
        return reduxCall(dispatch, {
            url: 'http://127.0.0.1:5000/json/register.json',
            method: 'GET',
            name: 'REGISTER',
        })
    }
}

export { LOGIN_ACTION, REGISTER_ACTION }
