import React from 'react'
import '../sidebar-pc/SidebarPc.css'

function SidebarPc(){
    return(
        <div className='sidebarContainer'>
            <h1 className='header'>Pocket Notes</h1>
            <div className='btn-container'>
                <button>
                    <p className='adder'>+</p>
                    <p>Create Notes group</p>
                </button>
            </div>
        </div>
    )
}

export default SidebarPc;