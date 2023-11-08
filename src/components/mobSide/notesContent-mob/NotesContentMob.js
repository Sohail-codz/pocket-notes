import React from 'react'
import '../notesContent-mob/NotesContentMob.css'

function NotesContentMob({note}){
    return(
        <div className='mob-notes-content-container'>
            <div className='mob-notes-time-details'>
                <p className='mob-note-time'>{note.time}</p>
                <p className='mob-note-date'>{note.date}</p>    
            </div>
            <div className='mob-notes-content-details'>
                <p className='mob-note-content'>{note.content}</p>
            </div>
        </div>
    )
}

export default NotesContentMob;