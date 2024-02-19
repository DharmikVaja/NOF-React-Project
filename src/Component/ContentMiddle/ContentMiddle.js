import React,{useState} from "react";
import "./contentMiddle.css";
import interBGImage from "../../assets/contentMiddle-bgImage.png";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

const ContentMiddle = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const backgroundImageStyle = {
    backgroundImage: `url(${interBGImage})`, // Use the interBGImage variable as the background image
  };

  return (
    <div className="international-sec spacer-y" style={backgroundImageStyle}>
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-xl-10 col-lg-12 col-md-12">
            <div className="international-head">
              <h2 className="int-head-h2">NOF International Olympiads</h2>
            </div>

            <div className="row">
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
            <Button
                    className="new-yellow-btn "
                    variant="primary"
                    onClick={handleShow}
                  >
                    Click Here to Register
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="reg-modal-text modal-body">
                        <h2>Your Learning, Your Way!</h2>
                        <p>Select Your Region and Class Preference.</p>
                        <div className="form-modal">
                          <div className="mb-3">
                            <div className="modal-form-country">
                              <label className="form-label">Country</label>
                              <select
                                name="form-select"
                                className="modal-form-select"
                              >
                                <option value>Select your Country</option>
                                <option value="India">India</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Sri-lanka">Sri-lanka</option>
                              </select>
                            </div>
                          </div>
                          <div className="mb-3">
                            <div className="modal-form-class">
                              <label className="form-label">Class</label>
                              <select
                                name="form-select"
                                className="modal-form-select"
                              >
                                <option value>Select your Class</option>
                                <option value="LKG">LKG</option>
                                <option value="UKG">UKG</option>
                                <option value="class 1">class 1</option>
                                <option value="class 2">class 2</option>
                                <option value="class 3">class 3</option>
                                <option value="class 4">class 4</option>
                                <option value="class 5">class 5</option>
                                <option value="class 6">class 6</option>
                                <option value="class 7">class 7</option>
                                <option value="class 8">class 8</option>
                                <option value="class 9">class 9</option>
                                <option value="class 10">class 10</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        
                        <Button variant="primary" className="new-yellow-btn content-sav-btn" >
                          Save Changes
                        </Button>
                      </div>
                    </Modal.Body>
                    </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMiddle;
