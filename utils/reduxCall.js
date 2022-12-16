/* eslint-disable prettier/prettier */
import actionTypes from '../config/actionTypes'
import fetchUrl from './fetchUrl'

const reduxCall = async (dispatch, { url, method, name }) => {
    dispatch({
        type: actionTypes[`${name}_STARTED`],
        logged: false,
        loading: true,
    })
    try {
        const response = await fetchUrl({ url, method })
        dispatch({
            type: actionTypes[`${name}_SUCCESS`],
            logged: true,
            loading: false,
            ...response,
        })
    } catch (e) {
        dispatch({
            type: actionTypes[`${name}_FAILED`],
            logged: false,
            loading: false,
            error: true,
        })
    }
}
export default reduxCall
