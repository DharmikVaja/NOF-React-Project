import React from 'react'
import Header from '../Header/Header';
import "./download.css"
import Form from "../Form/SubmitForm";
import Map from '../Map/Map';
import Footer from '../Footer/Footer';
const Download = () => {
  return (
    <div>
    <div className="set-top-margin-all"></div>
    <Header/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="download-heading spacer-y">
                    <h1> NOF International Olympiad's Syllabus</h1>
                </div>
                <div className="col-lg-10 col-md-12 ">
                    
                </div>
            </div>
        </div>
    <Form/>
    <Map/>
    <Footer/>
    </div>
    
  )
}

export default Download;