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
import Header from "../../Header/Header";
import ScrollToTop from "../../../Component/ScrollToTop/ScrollToTop";
import HIWData from "./HowItWorkData";

const HowItWork = () => {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  };
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" }}
        onClick={onClick}
      />
    );
  };
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
      <ScrollToTop />
      {/* <div className="set-top-margin-all"></div> */}
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
          {HIWData.map((item) => (
            <div
              data-index={item.id}
              key={item.id}
              className="slick-slide slick-active"
              tabIndex="-1"
              aria-hidden="false"
            >
              <div>
                <div className="how-work-box" tabIndex="-1">
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
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
