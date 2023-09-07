import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import ScrollToTop from "../containers/ScrollToTop"

const Layout = ({ children }) => {

  return (
    <>
      <Header />

      {children}

      <ScrollToTop />

      <Footer />
    </>
  )
}

export default Layout;
