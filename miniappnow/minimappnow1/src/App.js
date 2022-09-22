import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from './AppContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';

function App() {

const [movieList, setMovieList] = useState([]);

const passContext = {movieList, setMovieList};

useEffect(() => {
  fetch('http://localhost:8081')
  .then(res => res.json())
  .then(data => {
    setMovieList(data);
  })
  
}, [])


  return (
    <AppContext.Provider value={passContext}>
        <Router>
          <Header/>
          <Routes>

          <Route path='/' element={<HomePage/>}>

          </Route>
             {/* <Route path='/' element={<HomePage/>}/> */}
          
           </Routes>
        </Router>
   
    </AppContext.Provider>
  );
}

export default App;
