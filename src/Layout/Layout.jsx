import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useStore } from '../Store/Store'

const Layout = () => {
    const styleBackGround = useStore((s) => s.style);
  return (
    <div style={styleBackGround} className='min-h-screen w-full'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}


export default Layout