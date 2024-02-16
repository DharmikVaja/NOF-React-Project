import React from "react";
import Slider from "react-slick";
import SubmitForm from "../../Form/SubmitForm";
import Map from "../../Map/Map";
import Footer from "../../Footer/Footer";
import BgImg from "../../../assets/contentMiddle-bgImage.png";
import Benefit1 from "../../../assets/hiw-achievement.png";
import Benefit2 from "../../../assets/hiw-achievement2.png";
import Benefit3 from "../../../assets/hiw-achievement3.png";
import Benefit4 from "../../../assets/hiw-achievement4.png";
import "./how-it-work.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./how-it-work.css";
import slider1 from "../../../assets/slider1.png";
import Header from "../../Header/Header";

const HowItWork = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const containerStyle = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <Header />
      <div className="set-top-margin-all"></div>
      <div className="how-it-work-page" style={containerStyle}>
        <div className="head-practice-test p-0">
          <div className="container">
            <div className="justify-content-center row">
              <div className="col-lg-9 col-md-12">
                <div className="testimonial-heading text-center">
                  <h1>How It Works </h1>
                  <p>
                    Discover the power of personalized learning with NOF and
                    embark on a path to academic excellence while staying
                    connected through regular updates directly with parents. At
                    NOF, we've designed a straightforward and effective process
                    to help students embark on their educational journey with
                    confidence. Here's how it all works:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Slider {...settings}>
          {/* {[...Array(6).keys()].map((index) => (
            <div key={index}>
              <div className="how-work-box">
                <div className="image">
                  <img
                    src={slider1}
                    className="img-fluid"
                    alt={`img-${index}`}
                  />
                </div>
                <h4>{index + 1}. Slide Title</h4>
                <p>
                  Slide content goes here. You can customize it based on your
                  needs.
                </p>
              </div>
            </div>
          ))} */}
          <div className="slick-slide slick-active">
            <div className="how-work-box" tabIndex="-1">
              <div className="image">
                <img src={slider1} className="img-fluid" alt="img" />
              </div>
              <h4>1. Registration :</h4>
              <p>
                To get started, simply click on the "Register Now" button.
                You'll be prompted to select your region and class of interest,
                allowing us to tailor our offerings specifically to your needs.
              </p>
            </div>
          </div>

          <div
            data-index="1"
            className="slick-slide slick-active"
            tabIndex="-1"
            aria-hidden="false"
          >
            <div>
              <div className="how-work-box" tabIndex="-1">
                <div className="image">
                  <img src={slider1} className="img-fluid" alt="img" />
                </div>
                <h4>2. Personalized Assessment :</h4>
                <p>
                  Once registered, you'll gain access to our innovative
                  assessments. Our unique approach combines Animation-story and
                  AI-based evaluations for students from Nursery to KG 2 and
                  AI-driven exams, including math papers by Dr. RD Sharma, for
                  grades 6 to 10. This ensures a comprehensive evaluation of
                  your knowledge and cognitive skills.
                </p>
              </div>
            </div>
          </div>

          <div
            data-index="2"
            className="slick-slide slick-active"
            tabIndex="-1"
            aria-hidden="false"
          >
            <div>
              <div className="how-work-box" tabIndex="-1">
                <div className="image">
                  <img src={slider1} className="img-fluid" alt="img" />
                </div>
                <h4>3. AI-Powered Analysis :</h4>
                <p>
                  After completing the assessments, our cutting-edge AI
                  technology generates detailed analysis reports. These reports
                  not only highlight your areas of strength but also identify
                  knowledge gaps, helping us create a personalized learning plan
                  just for you.
                </p>
              </div>
            </div>
          </div>

          <div
            data-index="3"
            className="slick-slide"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div>
              <div className="how-work-box" tabIndex="-1">
                <div className="image">
                  <img src={slider1} className="img-fluid" alt="img" />
                </div>
                <h4>4. Communication :</h4>
                <p>
                  Throughout the entire session, NOF maintains open
                  communication. We provide regular updates directly to parents
                  at every step of the journey, ensuring you stay informed about
                  your child's progress.
                </p>
              </div>
            </div>
          </div>

          <div
            data-index="4"
            className="slick-slide"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div>
              <div className="how-work-box" tabIndex="-1">
                <div className="image">
                  <img src={slider1} className="img-fluid" alt="img" />
                </div>
                <h4>5. Learning Journey :</h4>
                <p>
                  Armed with your analysis report, you can begin your tailored
                  learning journey. NOF offers engaging resources, including
                  interactive questions, voice support for better understanding,
                  and flexible scheduling to accommodate your school and parent
                  commitments.
                </p>
              </div>
            </div>
          </div>

          <div
            data-index="5"
            className="slick-slide"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div>
              <div className="how-work-box" tabIndex="-1">
                <div className="image">
                  <img src={slider1} className="img-fluid" alt="img" />
                </div>
                <h4>6. International Recognition : </h4>
                <p>
                  As you progress in your NOF journey, you'll receive
                  international certificates from London, UK, adding a global
                  perspective to your educational achievements.
                </p>
              </div>
            </div>
          </div>
          <div
            data-index="6"
            className="slick-slide"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div>
              <div className="how-work-box" tabIndex="-1">
                <div className="image">
                  <img src={slider1} className="img-fluid" alt="img" />
                </div>
                <h4>7. Continuous Support : </h4>
                <p>
                  We're here to support you every step of the way. If you have
                  any questions or need assistance, our dedicated team is ready
                  to assist you.
                </p>
              </div>
            </div>
          </div>
          <div
            data-index="7"
            className="slick-slide"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div>
              <div className="how-work-box" tabIndex="-1">
                <div className="image">
                  <img src={slider1} className="img-fluid" alt="img" />
                </div>
                <h4>8. Educational Transformation :</h4>
                <p>
                  Join NOF today and experience how our innovative assessments
                  and personalized learning can transform your education,
                  helping you reach new heights in your academic journey.
                </p>
              </div>
            </div>
          </div>
          <div
            data-index="8"
            className="slick-slide"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div>
              <div className="how-work-box" tabIndex="-1">
                <div className="image">
                  <img src={slider1} className="img-fluid" alt="img" />
                </div>
                <h4>9. Dedicated Live Support : </h4>
                <p>
                  During examinations, we understand that you may have questions
                  or need assistance. That's why we offer dedicated live support
                  to address any concerns and ensure a smooth testing
                  experience.
                </p>
              </div>
            </div>
          </div>
        </Slider>
        <section className="benefit-sec">
          <div className="container">
            <div className="justify-content-center row">
              <h3 className="benefit-heading">Benefits For Students</h3>
              <div className="col-md-10">
                <div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="benefit-box-user">
                        <div className="border-image">
                          <img src={Benefit1} className="img-fluid" alt="img" />
                        </div>
                        <p>
                          Medals for Toppers &amp; Certificates for all the
                          participants.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="benefit-box-user">
                        <div className="border-image">
                          <img src={Benefit2} className="img-fluid" alt="img" />
                        </div>
                        <p>
                          Detailed Student Reports to identify areas of
                          improvement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="benefit-heading">Benefits for Schools</h3>
            <div className="justify-content-center row">
              <div className="col-md-10">
                <div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="benefit-box-user">
                        <div className="border-image">
                          <img src={Benefit3} className="img-fluid" alt="img" />
                        </div>
                        <p>Appreciation mementos for all the schools</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="benefit-box-user">
                        <div className="border-image">
                          <img src={Benefit4} className="img-fluid" alt="img" />
                        </div>
                        <p>Best School, Principal &amp; Coordinator Awards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <SubmitForm />
      <Map />
      <Footer />
    </>
  );
};
export default HowItWork;
