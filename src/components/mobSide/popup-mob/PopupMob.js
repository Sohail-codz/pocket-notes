import React from 'react'
import {useState} from 'react'
import '../popup-mob/PopupMob.css'

function PopupMob({
    gNamesHead,
    setGNamesHead,
    onClose, }){

    const [groupName,setGroupName]=useState("");
    const [bgroundColor,setBgroundColor]=useState("");

    const handleColor=(e)=>{
        const div = e.target;
        setBgroundColor(getComputedStyle(div).backgroundColor);
    };

    const svName=()=>{  
        const newGroup = {name: groupName, color: bgroundColor};
        setGNamesHead([...gNamesHead, newGroup]);
        localStorage.setItem(
            "groupNames",
            JSON.stringify([...gNamesHead, newGroup]));
        onClose();
        };
    return(
        <div className='mob-popup-container'>
        <div className='mob-popup-heading'>
            <h2>Create New Notes group</h2>
            <div className='mob-close-btn' onClick={onClose}>x</div>
        </div>
        <div className='mob-name-input-area'>
            <p>Group Name</p>
            <input
            value={groupName}
            onChange={(e)=>{setGroupName(e.target.value);}}
            type='text' id='mob-name-input' placeholder='Enter your group name...'  /><br></br>
        </div>
        <div className='mob-color-input-area'>
            <p>Choose Color</p>
            <div className='mob-color-container'>
                <div
                className={`mob-color-input-1 ${bgroundColor === "rgb(179, 139, 250)" ? `highlight` : null}`}
                onClick={handleColor}>
                </div>
                <div
                className={`mob-color-input-2 ${bgroundColor === "rgb(255, 121, 242)" ? `highlight` : null}`}
                onClick={handleColor}>
                </div>
                <div
                className={`mob-color-input-3 ${bgroundColor === "rgb(67, 230, 252)" ? `highlight` : null}`}
                onClick={handleColor}>
                </div>
                <div
                className={`mob-color-input-4 ${bgroundColor === "rgb(241, 149, 118)" ? `highlight` : null}`}
                onClick={handleColor}>
                </div>
                <div
                className={`mob-color-input-5 ${bgroundColor === "rgb(0, 71, 255)" ? `highlight` : null}`}
                onClick={handleColor}>
                </div>
                <div
                className={`mob-color-input-6 ${bgroundColor === "rgb(102, 145, 255)" ? `highlight` : null}`}
                onClick={handleColor}>
                </div>
            </div>
        </div>
        <div className='mob-create-btn'>
                <button onClick={svName} disabled={groupName.length===0 || bgroundColor==='' }>Create</button>
        </div>
      </div> 
    )
}

export default PopupMob;