import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'

const finalReducer = combineReducers({
    anecdotes: reducer,
    notification: notificationReducer
})

const store = createStore(
    finalReducer,
    composeWithDevTools()
)

export default store;

  