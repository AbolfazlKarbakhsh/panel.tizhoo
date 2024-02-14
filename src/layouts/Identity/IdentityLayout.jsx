import React, { useEffect } from 'react'
import { Outlet } from 'react-router'

function IdentityLayout() {

    useEffect(() => {
        document.body.classList.add("Bg_Auth")
    }, [])

    return (
        <>
            <Outlet />
        </>
    )
}

export default IdentityLayout