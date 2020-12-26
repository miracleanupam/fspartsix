import React from 'react'

import NewAnecdote from './components/NewAnecdote'
import Anecdotes from './components/Anecdotes'

import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Anecdotes />
      <h2>create new</h2>
      <NewAnecdote />
    </div>
  )
}

export default App