import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import SideNav from "./SideNav.jsx";


function Layout(){
    return(
        <>
        <Header/>
        {/* <SideNav/> */}
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;