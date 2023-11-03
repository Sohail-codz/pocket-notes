import React, { useEffect, useState } from 'react';
import '../notes-pc/NotesPc.css'
import enter from '../../../assets/enter.png'
import NotesContentPc from '../notesContent-pc/NotesContentPc';

function NotesPc({notes, setNotes, selected, setSelected}){
    const [text, setText]=useState("");
    const [bgroundColor,setBgroundColor]=useState("#fff");
    const [initials,setInitials]=useState("");
    const [selectedTitle,setSelectedTitle]=useState("");

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

    const handleSaveNotes=()=>{
        const notes= JSON.parse(localStorage.getItem(selected)) || [];
        const newObj= {
            id: Date.now(),
            title:selected,
            content: text,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
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
                <textarea value={text} placeholder='Enter your notes here' 
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