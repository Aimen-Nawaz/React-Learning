import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div >
        {children}
      </div>
      <Footer />
    </>
  )
}

export default PageLayout
