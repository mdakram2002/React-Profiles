import React from 'react'
import { Outlet } from 'react-router';

function MainHeader() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default MainHeader;