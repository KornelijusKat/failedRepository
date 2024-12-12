import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from '../header/Header'

import Works from '../works/Works'
import AddWork from '../addwork/AddWork'


function App() {
  

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Works/>}></Route>
          <Route path='/add-work' element={<AddWork/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
