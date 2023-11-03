import React,{useState} from 'react'
import '../pcView/PcView.css'
import NotesPc from '../../components/pcSide/notes-pc/NotesPc';
import HomePc from '../../components/pcSide/home-pc/HomePc';
import SidebarPc from '../../components/pcSide/sidebar-pc/SidebarPc';

function PcView(){
    const [selected, setSelected] = useState("");
    const [notes, setNotes] = useState([]);

    return(
        <div className='Home'>
            <SidebarPc selected={selected} setSelected={setSelected} />
            {selected.length > 0 ? (
                <NotesPc notes={notes} setNotes={setNotes} selected={selected} setSelected={setSelected} />
              ) : (
                <HomePc/>
              )}
        </div>
    )
}

export default PcView;