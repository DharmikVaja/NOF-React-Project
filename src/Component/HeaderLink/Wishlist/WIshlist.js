import React from "react";
import Header from "../../Header/Header";
import SubmitForm from "../../Form/SubmitForm";
import Footer from "../../Footer/Footer";
import Map from "../../Map/Map";
import "./wishlist.css";

const WIshlist = () => {
  return (
    <div>
      <div className="spacer-y"></div>
      <Header />
      <section class="olympaid-section mt-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="nof-same-font wishlist">
                <h3>Wishlist</h3>
                <span></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <p class="text-center">No Data Found</p>
            </div>
          </div>
        </div>
      </section>
      <SubmitForm />
      <Map />
      <Footer />
    </div>
  );
};

export default WIshlist;
