import React from 'react'
import { Outlet  } from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'
export default function HomeLayout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
