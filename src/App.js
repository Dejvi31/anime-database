import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Popular from './components/Popular'


const App = () => {
  return (
    <Router>
      <Popular />
    </Router>
  )
}

export default App