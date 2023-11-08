import './App.css';
import { useState } from 'react'
import PcView from './view/pcView/PcView';
import MobView from './view/mobView/MobView';
import NotesMob from './components/mobSide/notes-mob/NotesMob';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [windowSize, setWindowSize]=useState(window.innerWidth);
  const [selected,setSelected]=useState('')
  const [notes, setNotes]=useState([]);

  const checkWidth=()=>{
    setWindowSize(window.innerWidth);
  }
  window.addEventListener("resize",checkWidth);

  return (
    <div className="App">
      {windowSize > 600 ? (<PcView/>) : (
        <Router>
          <Routes>
            <Route path='/' element={<MobView selected={selected} setSelected={setSelected}/>}/>
            <Route path='/notesPage' element={<NotesMob selected={selected} setSelected={setSelected} notes={notes} setNotes={setNotes}/>}/>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
