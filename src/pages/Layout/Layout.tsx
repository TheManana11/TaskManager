// import React from 'react'
import { Outlet } from 'react-router-dom'
import SlideBar from '../../components/SlideBar/SlideBar'
import './styles.css'

const Layout = () => {
  return (
    <div className='layout-container'>
      <SlideBar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;
