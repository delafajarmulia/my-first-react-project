import React, { useState } from 'react'
import './App.css'
import Counter from './Counter'

import axios from 'axios'

function App() {
  const [quote, setQuote ] = useState('')

  return (
    <>
      {/* <h1>hello</h1>
      <Counter />
      <Counter />
      <Counter /> */}
      <h1>Qoute</h1>
      <p>{quote}</p>
      <button 
        onClick={() => axios.get('https://api.kanye.rest')
        .then(result => setQuote(result.data.quote))}
      >
          get a random quote
      </button>
    </>
  )
}

export default App
