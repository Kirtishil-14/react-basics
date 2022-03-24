import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './Main';
import Hooks from './routes/Hooks';

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Hooks" element={<Hooks />}></Route>
      </Routes>
    </Router>
  )
}

export default Home