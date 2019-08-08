import React from 'react'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'

import './App.css'
import Hero from './components/Hero'

function App() {
  const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Archivo:500,700&display=swap');
  body {
    font-family: 'Archivo', sans-serif;
    color: #31211B;
  }
`

  return (
    <div className="App">
      <GlobalStyle />
      <Helmet>
        <title>ByrdMR</title>
      </Helmet>
      <Hero />
    </div>
  )
}

export default App
