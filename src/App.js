import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Popular from './components/Popular'
import AnimeItem from './components/AnimeItem'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Popular />} />
        <Route path='/anime/:id' element={<AnimeItem />}/>
      </Routes>
      
    </Router>
  )
}

export default App