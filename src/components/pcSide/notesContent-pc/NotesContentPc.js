import React from 'react';
import '../notesContent-pc/NotesContentPc.css'

function NotesContentPc({note}){
    return(
        <div className='pc-notes-content-container'>
            <div className='notes-time-details'>
                <p className='note-time'>{note.time}</p>
                <p className='note-date'>{note.date}</p>    
            </div>
            <div className='notes-content-details'>
                <p className='note-content'>{note.content}</p>
            </div>
        </div>
    )
}

export default NotesContentPc;