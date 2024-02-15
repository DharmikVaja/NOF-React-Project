import React from "react";
import Form from "../Form/SubmitForm";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Syllabus = () => {
  return (
    <div>
      <Header />
      <div className="set-top-margin-all"></div>
      <div class="head-practice-test">
        <div class="container">
          <div class="justify-content-center row">
            <div class="col-lg-6 col-md-12">
              <div class="testimonial-heading text-center">
                <h1>NOF International Olympiads Syllabus </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <section class="olympaid-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="nof-same-font">
                <h3>NOF Junior International Olympiads</h3>
                <h6>For Classes Nursery to 5</h6>
                <span></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <a
                href="/assets/pdf/syllabus/Syllabus_Class_Nursery.pdf"
                target="_blank"
              >
                <div class="syllabus-home-box">
                  <p> NURSERY</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-6">
              <a
                href="/assets/pdf/syllabus/Syllabus_Class_LKG.pdf"
                target="_blank"
              >
                <div class="syllabus-home-box">
                  <p> LKG</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-6">
              <a
                href="/assets/pdf/syllabus/Syllabus_Class_UKG.pdf"
                target="_blank"
              >
                <div class="syllabus-home-box">
                  <p> UKG</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-6">
              <a
                href="/assets/pdf/syllabus/Syllabus_Class_1.pdf"
                target="_blank"
              >
                <div class="syllabus-home-box">
                  <p> CLASS 1</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-6">
              <a
                href="/assets/pdf/syllabus/Syllabus_Class_2.pdf"
                target="_blank"
              >
                <div class="syllabus-home-box">
                  <p> CLASS 2</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-6">
              <a
                href="/assets/pdf/syllabus/Syllabus_Class_3.pdf"
                target="_blank"
              >
                <div class="syllabus-home-box">
                  <p> CLASS 3</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-6">
              <a
                href="/assets/pdf/syllabus/Syllabus_Class_4.pdf"
                target="_blank"
              >
                <div class="syllabus-home-box">
                  <p> CLASS 4</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-6">
              <a
                href="/assets/pdf/syllabus/Syllabus_Class_5.pdf"
                target="_blank"
              >
                <div class="syllabus-home-box">
                  <p> CLASS 5</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section class="olympaid-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="nof-same-font">
                <h3>NOF International Olympiads</h3>
                <h6>For Classes 6 to 10</h6>
                <span></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <a
                href="/assets/pdf/syllabus/Syllabus_Class_6.pdf"
                target="_blank"
              >
                <div class="syllabus-home-box">
                  <p> CLASS 6</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-6">
              <a
                href="/assets/pdf/syllabus/Syllabus_Class_7.pdf"
                target="_blank"
              >
                <div class="syllabus-home-box">
                  <p> CLASS 7</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-6">
              <a
                href="/assets/pdf/syllabus/Syllabus_Class_8.pdf"
                target="_blank"
              >
                <div class="syllabus-home-box">
                  <p> CLASS 8</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-6">
              <a
                href="/assets/pdf/syllabus/Syllabus_Class_9.pdf"
                target="_blank"
              >
                <div class="syllabus-home-box">
                  <p> CLASS 9</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-6">
              <a
                href="/assets/pdf/syllabus/Syllabus_Class_10.pdf"
                target="_blank"
              >
                <div class="syllabus-home-box">
                  <p> CLASS 10</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <Form />
      <Map />
      <Footer />
    </div>
  );
};

export default Syllabus;
