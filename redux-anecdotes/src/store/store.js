import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'
import filterReducer from '../reducers/filterReducer'

const finalReducer = combineReducers({
    anecdotes: reducer,
    filter: filterReducer,
    notification: notificationReducer
})

const store = createStore(
    finalReducer,
    composeWithDevTools()
)

export default store;

  