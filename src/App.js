import React from 'react';
import './App.css'
import ReadT from './Components/ReadT';
import UpdateT from './Components/UpdateT'

import Create from './Components/Create';
import Update from './Components/Update';
import CreateT from './Components/CreateT';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App1'>
      <div className='header center'>
     <h3>CRUD Operation</h3>
      </div>
      <div className='body'>
    <BrowserRouter>
    <h3>Click Here to Add Student Entry: <Link to='/Create'>Create</Link> </h3>

    <h3>Click Here to Add Teachers Entry: <Link to='/CreateT'>Create</Link> </h3>

    

    <Routes>
      <Route path="/CreateT" element={<CreateT />}></Route>
      <Route path="/Create" element={<Create />}></Route>
      <Route path="/ReadT" element={<ReadT />}></Route>
      <Route path="/Update" element={<Update />}></Route>
      <Route path="/UpdateT" element={<UpdateT />}></Route>
    </Routes>
    </BrowserRouter>    
      </div>
      </div>
  )
}


export default App