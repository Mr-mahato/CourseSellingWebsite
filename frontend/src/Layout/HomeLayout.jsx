import React from 'react'
import { Outlet  } from 'react-router-dom'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
import Home from '../pages/Home'
export default function HomeLayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
