import React from "react";
import "../../contentMiddle.module.css";
import "../../app.css";
import interBGImage from "../../assets/contentMiddle-bgImage.png";

const ContentMiddle = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${interBGImage})`, // Use the interBGImage variable as the background image
  };

  return (
    <div>
      <div
        className="international-sec spacer-y  "
        style={backgroundImageStyle}
      >
        <div className="container">
          <div className="justify-content-center row">
            <div className="col-xl-10 col-lg-12 col-md-12">
              <div className="international-head">
                <h2 className="int-head-h2"> NOF International Olympiads</h2>
              </div>
              <div className="align-items-center row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="international-box">
                    <img
                      src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691577164831test5.png"
                      className="img-fluid"
                      alt="img"
                    />
                    <p>International Junior Phonics Olympiad</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="international-box">
                    <img
                      src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691574669762test3.png"
                      className="img-fluid"
                      alt="img"
                    />
                    <p>International Junior Hindi Olympiad</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="international-box">
                    <img
                      src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691575296724test6.png"
                      className="img-fluid"
                      alt="img"
                    />
                    <p>International Junior Science Olympiad</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="international-box">
                    <img
                      src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691575714423test2.png"
                      className="img-fluid"
                      alt="img"
                    />
                    <p>International Junior English Olympiad</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="international-box">
                    <img
                      src="https://nofs3-bucket.s3.ap-south-1.amazonaws.com/BOOKIMAGES/1691576833344test1.png"
                      className="img-fluid"
                      alt="img"
                    />
                    <p>International Junior Math Olympiad</p>
                  </div>
                </div>
              </div>
              <div className="set-top-margin">
                <a className="new-yellow-btn">Click Here To Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMiddle;
