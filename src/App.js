import React from 'react'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'

import Hero from './components/Hero'
import Contact from './components/Contact'

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
      <Contact />
    </div>
  )
}

export default App
