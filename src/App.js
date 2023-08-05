import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Popular from './components/Popular'
import AnimeItem from './components/AnimeItem'
<<<<<<< HEAD
=======
import Homepage from './components/Homepage'
>>>>>>> 0a1abebacc969ed9be95956807513d0b4f69c27b


const App = () => {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Popular />} />
=======
        <Route path='/' element={<Homepage />} />
>>>>>>> 0a1abebacc969ed9be95956807513d0b4f69c27b
        <Route path='/anime/:id' element={<AnimeItem />}/>
      </Routes>
      
    </Router>
  )
}

export default App