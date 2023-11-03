import React from 'react';
import '../notesHeader-pc/NotesHeaderPc.css'
 
function NotesHeaderPc({title, selected, setSelected}){
    const nameInitials=title[0].name
    .split(" ")
    .map((word)=> word.charAt(0))
    .join("")
    .toUpperCase();
    
    const newTitle = title[0].name
    .split(" ")
    .map((word)=>word.charAt(0).toUpperCase()+word.slice(1))
    .join(" ");

    const handleTitleClick=()=>{
        setSelected(title[0].name);
    };
    
    return(
        <div
        style={{cursor:'pointer',marginTop:'30px'}}
        onClick={handleTitleClick} 
        className={`group-logo-title ${selected === title[0].name ? `highlighted-title` : null}`}>
            <div className='logo-title' style={{backgroundColor: title[0].color}}>
            {nameInitials}
            </div>
            <div className='group-title'>
            {newTitle}
            </div>
        </div>
    )
}

export default NotesHeaderPc;