import React from 'react'
import logo from '@assets/images/logo-white.png'
function SideBarHeader({ style = {}, imgClass = '' }) {


    return (
        <>
            <div className='header-aside-lg align-items-center' style={style}>
                <h1 className="h5  px-0 mx-0 w-100 header-aside FSarbaz" style={{ color: '#fff' }} >
                    <span className='titr-asiade-header'>
                        تیزهو
                    </span>
                    مدیریت

                </h1>
                <div className="centerAll">
                    <img src={logo} alt="" className={`img-fluid ${imgClass}`} style={{ width: '60px', marginLeft: '15px' }} />
                </div>

            </div>
        </>


    )
}

export default SideBarHeader