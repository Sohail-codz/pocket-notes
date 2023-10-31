import React from 'react'
import '../pcView/PcView.css'
import HomePc from '../../components/pcSide/home-pc/HomePc';
import SidebarPc from '../../components/pcSide/sidebar-pc/SidebarPc';

function PcView(){
    return(
        <div className='Home'>
            <SidebarPc/>
            <HomePc/>
        </div>
    )
}

export default PcView;