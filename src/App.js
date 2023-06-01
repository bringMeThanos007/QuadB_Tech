
import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React,{useContext} from 'react';
import noteContext from './Context/noteContext';
import Navbar from './Navbar';
import Display from './Display';
import Summary from './Summary';

function App() {

  // using context 
  const context = useContext(noteContext);
  const { secondData, setSecondData } = context;
  return (
    <>
      <Router>
      <Navbar/>

        <Routes>
          <Route exact path="/" element={<Display />} />
        </Routes>
        <Routes>
          <Route exact path="/second" element={<Summary prop={secondData}/>} />
        </Routes>

      </Router>

    </>
  );
}

export default App;
