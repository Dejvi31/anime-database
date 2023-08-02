import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Homepage from './components/Homepage'


const App = () => {
  return (
    <Router>
      <Homepage />
    </Router>
  )
}

export default App