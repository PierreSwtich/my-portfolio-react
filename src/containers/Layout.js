import React from "react"
import NavigationBar from "./Navbar"
import Footer from "./Footer"
import ScrollToTop from '../components/ScrollToTop'

const Layout = ({ children }) => {

  return (
    <>
    <div className="page-wrapper" data-testid="page-wrapper">
      <NavigationBar />

      {children}

      <ScrollToTop />

      <Footer />
      </div>
    </>
  )
}

export default Layout;
