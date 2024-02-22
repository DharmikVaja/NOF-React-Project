import React from "react";
import NavbarDashboard from "../UserDashboard/NavbarDashboard";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineManageSearch } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const DashNotification = () => {
  return (
    <div>
      <div>
        <div>
          <div className="dashboard-layout ">
            <div className="inner-dash-bpx ">
              <header className="main-header login-header-home">
                <NavbarDashboard />
                <ScrollToTop />
              </header>

              <section className="dash-outer-box">
                <div className="row">
                  <div className="col-md-12">
                    <div className="view-all-link pad-set register-border">
                      <div className="head-for-all-page gap-2">
                        <IoIosNotificationsOutline className="fs-3" />
                        <div>
                          <h3>Notifications</h3>
                          <p>You can check out your Notifications here </p>
                        </div>
                      </div>
                      <Link className="common-btn" to="/user-dashboard">Back</Link>
                    </div>
                  </div>
                </div>
                <div className="pad-set">
                  <div className="d-sm-flex align-items-center table-head-drop">
                    <div className="mx-3">
                      <MdOutlineManageSearch className="fs-3" />
                    </div>
                    <div>
                      <div className="input-group">
                        <input
                          placeholder="Search"
                          name="search"
                          type="text"
                          className="search_data play-search1 form-control"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div>
                      <button className="common-all-btn ms-4">Clear Filter</button>
                    </div>
                  </div>
                  <div className="table-responsive table-exam-schedule less-padding">
                    <table className="table">
                      <thead className="report-small">
                        <tr>
                          <th>S.No</th>
                          <th>Title</th>
                          <th>Message</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>स्लॉट 𝟭 और 𝟮 स्टूडेंट्स के लिए 𝗟𝗔𝗦𝗧 𝗖𝗛𝗔𝗡𝗖𝗘 जिनकी 𝗡𝗢𝗙 𝗲𝘅𝗮𝗺 𝗺𝗶𝘀𝘀 हो गई थी:</td>
                          <td>𝗠𝗶𝘀𝘀𝗲𝗱 𝗘𝘅𝗮𝗺 देने का मौका न चूकें। 𝗘𝘅𝗮𝗺 𝟭𝟲 से 𝟭𝟴 जनवरी तक लगातार तीन दिनों तक सुबह 𝟵 बजे से रात 𝟴 बजे (𝗜𝗦𝗧) तक खुली रहेगी। इस आखरी मौके का लाभ उठाएं, क्योंकि किसी भी परिस्थिति में आगे कोई मौका नहीं दिया जाएगा।</td>
                        </tr>
                        <tr>
                          <td>2 </td>
                          <td>𝗟𝗔𝗦𝗧 & 𝗙𝗜𝗡𝗔𝗟 𝗖𝗔𝗟𝗟 𝗳𝗼𝗿 𝗦𝗹𝗼𝘁 𝟭 & 𝟮 𝗽𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝗻𝘁𝘀 𝘄𝗵𝗼 𝗺𝗶𝘀𝘀𝗲𝗱 𝘁𝗵𝗲𝗶𝗿 𝗡𝗢𝗙 𝗲𝘅𝗮𝗺𝘀:</td>
                          <td>Don't miss your last chance to take the missed NOF examinations. The exam window will open from January 16th to 18th, running from 9 AM to 8 PM (IST) for three consecutive days. Seize this last opportunity, as no further chances will be provided under any circumstances.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex justify-content-center paginate-register">
                    <div className="d-flex">
                      <div className="d-flex justify-content-center paginate-register">
                        <div className="d-flex align-items-center">
                          <button className="common-btn">
                            <MdKeyboardArrowLeft />
                          </button>
                          <button className="common-btn m-2">
                            Page 1 of 1
                          </button>
                          <button className="common-btn">
                            <MdKeyboardArrowRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNotification;
