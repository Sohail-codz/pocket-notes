import './App.css';
import { useState } from 'react'
import PcView from './view/pcView/PcView';
import MobView from './view/mobView/MobView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [screenSize, setScreenSize]=useState(window.innerWidth);

  const checkWidth=()=>{
    setScreenSize(window.innerWidth);
  }
  window.addEventListener("resize",checkWidth);

  return (
    <div className="App">
      {screenSize > 600 ? (<PcView/>) : (
        <Router>
          <Routes>
            <Route path='/' element={<MobView/>}/>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
