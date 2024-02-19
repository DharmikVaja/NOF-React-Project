import React from 'react'
import Header from '../../Header/Header';
import "./download.css"
import Form from "../../Form/SubmitForm";
import Map from '../../Map/Map';
import Footer from '../../Footer/Footer';
import { FaDownload } from "react-icons/fa";
import downreport1 from "../../../assets/pdf/download/report1.pdf"
import downreport2 from "../../../assets/pdf/download/report2.pdf"
import downreport3 from "../../../assets/pdf/download/report3.pdf"
import ScrollToTop from '../../ScrollToTop/ScrollToTop';

const Download = () => {
  return (
    <div>
    <div className="set-top-margin-all"></div>
    <Header/>
    <ScrollToTop/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="download-heading spacer-y">
                    <h1> NOF International Olympiad's Syllabus</h1>
                </div>
                
                <div className="col-lg-6 col-md-12 ">
                <div className="download-home-box">
                  <p> AI based report and analysis for NOF Junior International Olympiads</p>
                <a href={downreport1} type="button " className="new-yellow-btn" target="_blank">View Report <FaDownload />
              </a>
                </div>
                </div>
                <div className="col-lg-6 col-md-12 ">
                <div className="download-home-box">
                  <p> AI based report and analysis for NOF International Olympiads</p>
                <a href={downreport2} type="button" className="new-yellow-btn" target="_blank"> View Report <FaDownload />
              </a>
                </div>
                </div>
                <div className="col-lg-6 col-md-12 ">
                <div className="download-home-box ">
                  <p> NOF International Olympiad E-Brochure</p>
                <a href={downreport3} type="button" className="new-yellow-btn" target="_blank">View Report <FaDownload />
              </a>
                </div>
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