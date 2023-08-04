import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Popular from './components/Popular'
import AnimeItem from './components/AnimeItem'
import Homepage from './components/Homepage'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/anime/:id' element={<AnimeItem />}/>
      </Routes>
      
    </Router>
  )
}

export default App