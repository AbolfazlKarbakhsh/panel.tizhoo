import React from 'react'
import SideBarHeader from './SideBarHeader'
import {useAppContext} from '@context/AppContext'
import { HiMenuAlt2 } from "react-icons/hi";
function HeaderMobile() {
    const { DrawerGigaMenu} = useAppContext()
    return (

        <div className="panelMobilTopNav col-12  d-md-none overflow-hidden animatinLoad ">
             <div>
                <span className="IconSet bi-filter-left activeBtn font9 bold p-2 rounded effect" onClick={DrawerGigaMenu} style={{marginTop:'-13px'}}>
                <HiMenuAlt2 />
                </span>
            </div>
            <SideBarHeader style={{ justifyContent: 'end' }}/>
           
        </div>

    )
}

export default HeaderMobile