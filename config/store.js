import rootReducer from '../reducers'
// import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'

const composeEnhancers = composeWithDevTools({
  name: 'job',
})

// const store = configureStore({
//   reducer: { rootReducer },
//   composeEnhancers,
// })

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
