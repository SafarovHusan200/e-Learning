import React from 'react'
// Global style
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
// import pages 
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  )
}

export default App