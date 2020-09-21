import React, { useState } from 'react';
import './App.css';
import request from './components/api/request';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Results from './components/results/Results';


function App() {

  const [selectedOption,setSelectedOption] = useState(request.fetchTrending)
  return (
    <div className="app">
      <Header/>
      <Navbar setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
