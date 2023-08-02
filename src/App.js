import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import Popular from './components/Popular'
// import AnimeItem from './components/AnimeItem'

import Homepage from './components/Homepage'


const App = () => {
  return (
    <Router>
      <Homepage />
    </Router>
  )
}

export default App