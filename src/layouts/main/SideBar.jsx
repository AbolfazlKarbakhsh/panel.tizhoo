import React from 'react'
import SideBarHeader from './SideBarHeader'
import { NavLink } from 'react-router-dom';
import ButtonsSidebar from './ButtonsSidebar';
import { IoExitOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useAppContext } from '@context/AppContext'
function SideBar() {
    const { gigaMenu, DrawerGigaMenu } = useAppContext()
    const HandelExitAccount = () => {
        localStorage.removeItem("t_a#@$sdf_k")
    }
    return (
        <div
            className="col-5 col-md-3 col-lg-2  gigamenu"
            style={{ right: gigaMenu ? '0' : '' }}
        >
            <div className="RightGigiMenu h-sm-auto position-relative">

                <SideBarHeader imgClass="hide-img-769"/>

                {/* <!-- buttons  Pges--> */}
                <div className="AvatarFix sizeBtn pt-2 pb-2" >
                    <ButtonsSidebar />
                </div>


                {/* <!-- buttons  Mangage--> */}
                <div className="AvatarFix sizeBtn pt-2 pb-2" >

                    <NavLink to="/login" className={`nav btn btnRightNav IconSet activeBtn `}
                    onClick={HandelExitAccount}
                        role="button" aria-pressed="false" >
                        <span className="font2 items">  خروج از حساب  </span>
                        <IoExitOutline className={`font7  ct-green-dark `} />
                    </NavLink>

                </div>

                {/* <!-- exit btn  --> */}
                <div className={` IconSet d-block d-md-none cl-gray pointer effect mt-3 font9 position-absolute sidebar-exit-posation`} onClick={DrawerGigaMenu} >
                    <div className='btn sidebar-color rounded effect' style={{ padding: ".4rem .5rem" }}>
                        <IoClose className=' text-white  ' style={{ fontSize: "1.3rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar