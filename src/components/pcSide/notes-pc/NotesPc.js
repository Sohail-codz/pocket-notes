import React, { useEffect, useState } from 'react';
import '../notes-pc/NotesPc.css'
import enter from '../../../assets/enter.png'
import NotesContentPc from '../notesContent-pc/NotesContentPc';

function NotesPc({notes, setNotes, selected, setSelected}){
    const [text, setText]=useState("");
    const [bgroundColor,setBgroundColor]=useState("#fff");
    const [initials,setInitials]=useState("");
    const [selectedTitle,setSelectedTitle]=useState("");
    function getDaySuffix(day) {
        if (day >= 11 && day <= 13) {
          return 'th';
        }
        switch (day % 10) {
          case 1:
            return 'st';
          case 2:
            return 'nd';
          case 3:
            return 'rd';
          default:
            return 'th';
        }
      }

    useEffect(()=>{
        setNotes(JSON.parse(localStorage.getItem(selected))|| []);
        const groupNames = JSON.parse(localStorage.getItem("groupNames"));
        const selectedGroup = groupNames.find((group)=>group.name===selected);

        if(selectedGroup){
            setBgroundColor(selectedGroup.color);
            setInitials(
                selectedGroup.name
                .split(" ")
                .map((word)=>word.charAt(0))
                .join("")
                .toUpperCase()
            );
            setSelectedTitle(
                selectedGroup.name
                .split(" ")
                .map((word)=>word.charAt(0).toUpperCase()+word.slice(1))
                .join(" ")
            );
        }
    },[selected, setNotes])
    
    const formatTime = (timeStr) => {
        const options = {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        };
        return new Date(timeStr).toLocaleTimeString(undefined, options);
    };

    const handleSaveNotes=()=>{
        const notes= JSON.parse(localStorage.getItem(selected)) || [];
        const dateObj = new Date();
        const day = dateObj.getDate();
        const month = dateObj.toLocaleString('default', { month: 'long' });
        const year = dateObj.getFullYear();
        const formattedDate = `${day}${getDaySuffix(day)} ${month}, ${year}`;

        const newObj= {
            id: Date.now(),
            title:selected,
            content: text,
            date: formattedDate,
            time: formatTime(new Date().toUTCString()),
        };
        notes.push(newObj);
        localStorage.setItem(selected, JSON.stringify(notes));
        setText("");
        setNotes(notes);
    };

    const handleKeyDown=(e)=>{
        if(e.key==='Enter'){
            e.preventDefault();
            handleSaveNotes();
        }
    }

    return(
        <div className='notes-container'>
            <div className='notes-title'>
             <div className='notes-title-color' style={{backgroundColor:bgroundColor}}>
                {initials}
             </div>
             <div className='notes-title-text'>{selectedTitle}</div>
            </div>
            <div className='notes-content'>
                {notes && notes.length>0 ?
                notes.map((note,index)=>(
                    <NotesContentPc key={index} note={note}/>
                )):null}
            </div>
            <div className='notes-input-area'>
                <textarea id='note-texts' value={text} placeholder='Enter your notes here' 
                onChange={(e)=>{
                    setText(e.target.value);
                }}
                onKeyDown={handleKeyDown}></textarea>
                <img src={enter} alt='enter' onClick={handleSaveNotes}/>
            </div>
        </div>
    )
}

export default NotesPc;