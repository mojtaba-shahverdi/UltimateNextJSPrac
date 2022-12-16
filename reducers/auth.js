import actionTypes from '../config/actionTypes'

const auth = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOGIN_STARTED:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,
        user: action.user,
      }
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,
      }
    case actionTypes.REGISTER_STARTED:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,
      }
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,
      }
    case actionTypes.REGISTER_FAILED:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,
      }
    default:
      return state
  }
}

export default auth
