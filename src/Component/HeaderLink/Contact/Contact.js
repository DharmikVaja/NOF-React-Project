import React from 'react'
import SubmitForm from '../../Form/SubmitForm'
import Map from '../../Map/Map'
import Footer from '../../Footer/Footer'
import Header from  "../../Header/Header";
import ScrollToTop from '../../ScrollToTop/ScrollToTop';

const Contact = () => {
  return (
    <div>
    <div className="set-top-margin-all">
    <Header/>
    <ScrollToTop/>
        <SubmitForm/>
        <Map/>
        <Footer/>
    </div>
    </div>
  )
}

export default Contact