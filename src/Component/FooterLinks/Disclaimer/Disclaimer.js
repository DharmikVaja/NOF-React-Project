import React from "react";
import Header from "../../Header/Header";
import "./disclaimer.css"
import Footer from "../../Footer/Footer";
import SubmitForm from "../../Form/SubmitForm";

const Disclaimer = () => {
  return (
    <div>
      <div className="set-top-margin-all"></div>
      <Header />
      <div className="container text-center spacer-y">
        <div className="row disc-text">
          <div className="col-md-12">
            <h1 className="privacy-heading ">NOF: Disclaimer</h1>
            <div className="privacy-para text-start py-5">
              <p>
                The information contained in this website is for general
                information purposes only. The information is provided by
                National Olympiad Foundation and while we endeavor to keep the
                information up to date and correct, we make no representations
                or warranties of any kind, express or implied, about the
                completeness, accuracy, reliability, suitability or availability
                with respect to the website or the information, products,
                services, or related graphics contained on the website for any
                purpose. Any reliance you place on such information is therefore
                strictly at your own risk.
              </p>
              <p>
                In no event will we be liable for any loss or damage including
                without limitation, indirect or consequential loss or damage, or
                any loss or damage whatsoever arising from loss of data or
                profits arise out of, or in connection with, the use of this
                website.
              </p>
              <p>
                Through this website you are able to link to other websites
                which are not under the control of National Olympiad Foundation
                We have no control over the nature, content and availability of
                those sites. The inclusion of any links does not necessarily
                imply a recommendation or endorse the views expressed within
                them.
              </p>
              <p>
                Every effort is made to keep the website up and running
                smoothly. However, National Olympiad Foundation takes no
                responsibility for, and will not be liable for, the website
                being temporarily unavailable due to technical issues beyond our
                control.
              </p>
              <br />
              <p>
                National Olympiad Foundationis located at –<br />
                Address: 108 Saket, Indore, MP 452018
                <br />
                Email: support@nof.org.in
                <br />
                Website: www.nofjunior.online | www.nof.org.in
              </p>
            </div>
          </div>
        </div>
      </div>
      <SubmitForm/>
      <hr/>
      <Footer/>
    </div>
  );
};

export default Disclaimer;
