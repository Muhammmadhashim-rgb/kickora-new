import React, { Component } from 'react'
import Navbar from '../repetitiveComponents/Navbar'
import NEWdropsHeading from '../NonRepetitiveComponents/NEWdropsHeading'
import Footer from '../repetitiveComponents/Footer'


export default class Shop extends Component {
  render() {
    return (
      <div>
        <div className='Home_page'>
      <div className="container mx-auto px-4 sm:px-6 xs:px-3 lg:px-12">
        <Navbar />
        
        <NEWdropsHeading heading1="You may also like"  />
      </div>
   
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 mt-[12%]">
        <Footer />
      </div>

    </div>
      </div>
    )
  }
}
