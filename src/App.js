import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
<<<<<<< HEAD
import Popular from './components/Popular'
import AnimeItem from './components/AnimeItem'
=======

import Homepage from './components/Homepage'
>>>>>>> rei21


const App = () => {
  return (
    <Router>
<<<<<<< HEAD
      <Routes>
        <Route path='/' element={<Popular />} />
        <Route path='/anime/:id' element={<AnimeItem />}/>
      </Routes>
      
=======
      <Homepage />
>>>>>>> rei21
    </Router>
  )
}

export default App