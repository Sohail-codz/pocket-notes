import React from 'react';
import {useState, useRef, useEffect} from 'react'
import PopupMob from '../../components/mobSide/popup-mob/PopupMob';
import NotesHeaderMob from '../../components/mobSide/notesHeader-mob/NotesHeaderMob';
import '../mobView/MobView.css'

function MobView({selected, setSelected}){
    const[titles, setTitles]=useState([]);
    const[gNamesHead, setGNamesHead]=useState(
        localStorage.getItem('groupNames') || []
    );
    const[showPopup, setShowPopup]=useState(false);
    const popupRef = useRef(null);

    useEffect(()=>{
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
        
            <div className='home-mob-container'> 
                <h1 className='home-mob-heading'>Pocket Notes</h1>
                <div className='mob-btn-container'>
                <button  onClick={handleClick}>  
                    <p className='adder'>+</p>
                    <p>Create Notes group</p>
                </button>
                </div>
                <div className='mob-notes-title-area' style={{overflowY:'scroll',marginTop:'10px'}}>
                {titles.length >0 &&titles.map((title,index)=>(
                <NotesHeaderMob
                selected={selected}
                setSelected={setSelected}
                key={index} 
                title={title}
                />
                ))}
                </div>
                {showPopup &&(
                    <div className='popup-mob-container'>
                        <div className='popup-mob-here' ref={popupRef}>
                        <PopupMob
                        gNamesHead={gNamesHead}
                        setGNamesHead={setGNamesHead}
                        onClose={handleClose}/>
                        </div>
                    </div>
                    )}
            </div>
    )
}

export default MobView;

