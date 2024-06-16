import React, { useState } from 'react'
import './App.css'
import Counter from './Counter'

import axios from 'axios'
import { RouterProvider } from 'react-router-dom'
import router from './Router'

function App() {
  // const [quote, setQuote ] = useState('')

  return (
    <>
      {/* <h1>hello</h1>
      <Counter />
      <Counter />
      <Counter /> */}
      {/* <h1>Qoute</h1>
      <p>{quote}</p>
      <button 
        onClick={() => axios.get('https://api.kanye.rest')
        .then(result => setQuote(result.data.quote))}
      >
          get a random quote
      </button> */}
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}

      {/* <RouterProvider router={router} /> */}
      <p>this is app</p>
    </>
  )
}

export default App
