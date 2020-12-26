import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Notification from './Notification'
import { addVote } from '../reducers/anecdoteReducer'
import { changeNotification, removeNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(addVote(id))
        dispatch(changeNotification(`You voted ${anecdote.content}`))
        setTimeout(() => dispatch(removeNotification()), 5000)
    }

    return (
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
    )
}

const Anecdotes = () => {
    const appState = useSelector(state => {
      if (state.filter && state.filter !== '') {
        return {...state, anecdotes: state.anecdotes.filter(a => a.content.includes(state.filter))}
      }
      return state
    })

    return (
      <div>
        <div>
          {appState.notification ? <Notification notification={appState.notification} />: <div></div>}
        </div>
        <div>
         {appState.anecdotes.map(anecdote =>
            <Anecdote key={anecdote.id} anecdote={anecdote} />
        )}
        </div>
        </div>
    )
}

export default Anecdotes