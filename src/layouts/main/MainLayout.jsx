import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import SideBar from './SideBar'
import { useAppContext } from '@context/AppContext'
import DarkPanel from '@components/global/darkPanel'
import HeaderMobile from './headerMobile'
function MainLayout() {
    const { gigaMenu, DrawerGigaMenu } = useAppContext()
    const StateToken = localStorage.getItem("t_a#@$sdf_k")
    const navigate = useNavigate()
    useEffect(() => {
        if (StateToken == null) {
            navigate("/login")
        }
    }, [StateToken])
    return (
        <>
            {
                StateToken && (
                    <div className="CenterBox animatinLoad ">
                        <div className="PanelCenter row m-0">
                    

                            <div className="col-12 col-md-9 col-lg-10 mainContent px-2" style={{ overflow: 'auto' }}>
                                <div className=" mio unload ">
                                    <HeaderMobile />
                                    <Outlet />
                                </div>
                            </div>

                            <SideBar />
                            <DarkPanel openState={gigaMenu} method={DrawerGigaMenu} className="hide-right-768" />
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default MainLayout