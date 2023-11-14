import React from 'react'
import { useEffect, useState, useRef } from 'react';
import '../sidebar-pc/SidebarPc.css'
import PopupPc from '../popup-pc/PopupPc';
import NotesHeaderPc from '../notesHeader-pc/NotesHeaderPc';

function SidebarPc({selected, setSelected}){
    const[titles, setTitles]=useState([]);
    const[gNamesHead, setGNamesHead]=useState(
        localStorage.getItem('groupNames') || []
    );
    const[showPopup, setShowPopup]=useState(false);
    const popupRef = useRef(null);

    useEffect((e)=>{
        const data = localStorage.getItem('groupNames')
        if(data){
            setGNamesHead(JSON.parse(data));
        }else{
            setGNamesHead([]);
        }
    },[]);
    useEffect(()=>{
        if(gNamesHead.length>0){
            const obj = JSON.parse(localStorage.getItem('groupNames'));
            const result = Object.keys(obj).map((key)=>[obj[key]]);
            setTitles(result);
        }
    }, [gNamesHead]);

    const handleClick=()=> {
        setShowPopup(!showPopup);
    }
    const handleClose=()=>{
        setShowPopup(false);
    }
    const handleDocumentClick = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
          setShowPopup(false);
        }
      };
    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentClick);
        return () => {
          document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, []);

    return(
        <div className='sidebarContainer'>
            <h1 className='header'>Pocket Notes</h1>
            <div className='btn-container'>
                <button onClick={handleClick}>  
                        <p className='adder'>+</p>
                        <p>Create Notes group</p>
                </button>
            </div>
            <div className='pc-notes-title-area'>
            {titles.length >0 &&titles.map((title,index)=>(
                <NotesHeaderPc
                selected={selected}
                setSelected={setSelected}
                key={index} 
                title={title}
                />
            ))}
            </div>
            {showPopup &&(
                <div className='popup-pc-container'>
                <div className='popup-here' ref={popupRef}>
                <PopupPc
                gNamesHead={gNamesHead}
                setGNamesHead={setGNamesHead}
                onClose={handleClose}
                />
                </div>
            </div>)}
        </div>
    );
}

export default SidebarPc;