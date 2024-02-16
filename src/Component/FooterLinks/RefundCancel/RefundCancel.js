import React from "react";
import Header from "../../Header/Header";
import "../Disclaimer/disclaimer.css"
import Footer from "../../Footer/Footer";
import SubmitForm from "../../Form/SubmitForm";

const RefundCancel = () => {
  return (
    <div>
      <div className="set-top-margin-all"></div>
      <Header />
      <div className="container text-center spacer-y">
        <div className="row disc-text">
          <div className="col-md-12">
            <h1 className="privacy-heading ">NOF: Refund & Cancellation</h1>
            <div className="privacy-para text-start py-5">
              <p>
                The examination fee is non-refundable under any circumstances.
              </p>
              <p>For details, mail us at support@nof.org.in</p>
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

export default RefundCancel;
