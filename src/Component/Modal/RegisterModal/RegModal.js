// import React, { useState } from "react";
// import "./RegModal.css";

// const RegModal = () => {
//   const [showModal, setShowModal] = useState(false);
//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   return (
//     <div>
//       <div className="container">
//         <div className="row">
//           <div className="col lg-8 col-md-12">
//             <div className="reg-modal-text">
             
//             </div>
//             <div className="form-modal">
//               <label className="form-label">Country</label>
//               <select name="country-name" className="modal-form-select">
//                 <option value>Select your Country</option>
//                 <option value="India">Select your Country</option>
//                 <option value="Nepal">Select your Country</option>
//                 <option value="Pakistan">Select your Country</option>
//                 <option value="Afghanistan">Select your Country</option>
//                 <option value="Sri-lanka">Select your Country</option>
//               </select>
//               <label className="form-label">Class</label>
//               <select name="country-name" className="modal-form-select">
//                 <option value>Select your Class</option>
//                 <option value="LKG">LKG</option>
//                 <option value="UKG">UKG</option>
//                 <option value="class 1">class 1</option>
//                 <option value="class 2">class 2</option>
//                 <option value="class 3">class 3</option>
//                 <option value="class 4">class 4</option>
//                 <option value="class 5">class 5</option>
//                 <option value="class 6">class 6</option>
//                 <option value="class 7">class 7</option>
//                 <option value="class 8">class 8</option>
//                 <option value="class 9">class 9</option>
//                 <option value="class 10">class 10</option>
//               </select>
//               <submit className="modal-btn" onClick={openModal}>
//                 Submit
//               </submit>
//             </div>
//             {showModal && <RegModal closeModal={closeModal} />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegModal;
