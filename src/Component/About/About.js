import React from "react";
import AboutImage from "../../assets/what-is-nof-image.png";

const About = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${AboutImage})`,
  };
  return (
    <>
      <div class="about-use-sec">
        <div class="container">
          <div class="align-items-center row">
            <div class="col-lg-5 col-md-6">
              <div class="about-heading">
                <h2>What is NOF International Olympiads?</h2>
                <p class="all-pgraph">
                  Children love cartoons as compared to learning from books.
                  Gamified animated content motivates them and encourages them
                  to take actions.
                  <br />
                  <br /> NOF Junior is a gamified assessment platform and not a
                  regular pen and paper-based test, the questions asked are
                  interactive, children can touch the cartoons and other
                  elements on the screen , questions have voice support for
                  better understanding. This makes the entire exercise very
                  entertaining & engaging
                </p>
              </div>
            </div>
            <div class="col-lg-7 col-md-6">
              <div class="text-center">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
