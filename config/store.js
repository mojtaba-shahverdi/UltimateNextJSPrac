import rootReducer from '../reducers'
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'

const composeEnhancers = composeWithDevTools({
  name: 'job',
})

const store = configureStore({
  reducer: { rootReducer },
  composeEnhancers,
})

export default store
