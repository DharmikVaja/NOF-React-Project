import React from "react";
import "./app.css";
import HowItWork from "./Component/HeaderLink/How-it-Work/HowItWork";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ReportAnalysis from "./Component/HeaderLink/ReportAnalysis/ReportAnalysis";
import Home from "./Component/Home/Home";
import Syllabus from "./Component/HeaderLink/Syllabus/Syllabus";
import WIshlist from "./Component/HeaderLink/Wishlist/WIshlist";
import Download from "./Component/HeaderLink/Download/Download";
import Contact from "./Component/HeaderLink/Contact/Contact";
import Cart from "./Component/HeaderLink/Cart/Cart";
import PrivacyPolicy from "./Component/FooterLinks/PrivacyPolicy/PrivacyPolicy";
import TermsService from "./Component/FooterLinks/TermsService/TermsService";
import Disclaimer from "./Component/FooterLinks/Disclaimer/Disclaimer";
import RefundCancel from "./Component/FooterLinks/RefundCancel/RefundCancel";
import StudentLogin from "./Component/LoginPage/StudentLogin";
import SchoolLogin from "./Component/LoginPage/SchoolLogin";
import Product from "./Component/Product/Product";
import Dashboard from "./Component/Dashboard/UserDashboard/Dashboard";
import SelectTest from "./Component/Dashboard/SelectTest/SelectTest";
import DemoTest from "./Component/Dashboard/SelectTest/DemoTest";
import Instruction from "./Component/Dashboard/SelectTest/Instruction";
import ExamGuideline from "./Component/Dashboard/ExamGuideline/ExamGuideline";
import ResultReport from "./Component/Dashboard/ResultReport/ResultReport";
import PracticeEBook from "./Component/Dashboard/PracticeBook/PracticeEBook";
import AfterReport from "./Component/Dashboard/ResultReport/AfterReport";
import ActivityLog from "./Component/Dashboard/ActivityLog/ActivityLog";
import FAQs from "./Component/Dashboard/FAQs/FAQs";
import OlymSyllabus from "./Component/Dashboard/OlymSyllabus/OlymSyllabus";
import AccountSettings from "./Component/Dashboard/AccountSettings/AccountSettings";
import DashUserProfile from "./Component/Dashboard/UserAccountComp/DashUserProfile";
import DashNotification from "./Component/Dashboard/UserAccountComp/DashNotification";
import OrderSummary from "./Component/Dashboard/PracticeBook/OrderSummary";
import Ticket from "./Component/Dashboard/FAQs/Ticket";
import AddressManager from "./Component/Dashboard/AccountSettings/AddressManager";
import MyOrdersComp from "./Component/Dashboard/AccountSettings/MyOrdersComp";
import TransactionHistory from "./Component/Dashboard/AccountSettings/TransactionHistory";
import AddStudent from "./Component/Dashboard/AddStudent/AddStudent";
import TicketHistory from "./Component/Dashboard/FAQs/TicketHistory";
import Signup from "./Component/LoginPage/Signup";
import Admin from "./Component/LoginPage/Admin";
import ProtectedRoute from "./Component/ProtectedRoute.js/ProtectedRoute";
import AdminPanel from "./Component/Admin Panel/AdminPanel";
import ForgotPassword from "./Component/LoginPage/ForgotPassword";
import PurchaseCourse from "./Component/Dashboard/SelectTest/PurchaseCourse";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route
          path="/product"
          element={<Product  />}
        />
        <Route path="/how-it-works" element={<HowItWork />} />
        <Route path="/reports-and-analysis" element={<ReportAnalysis />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/wishlist" element={<WIshlist />} />
        <Route path="/downloads" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsService />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/refund-and-cancellation" element={<RefundCancel />} />
        {/* <Route path="modal" element={<RegModal />} /> */}
        <Route path="/school-login" element={<SchoolLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-dashboard" element={<AdminPanel />} />
        <Route path="/forgot-psd" element={<ForgotPassword />} />
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/user-dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        <Route path="/select-test" element={<ProtectedRoute><SelectTest/></ProtectedRoute>} />
        <Route path="/demo-test" element={<ProtectedRoute><DemoTest/></ProtectedRoute>} />
        <Route path="/purchase-course" element={<ProtectedRoute><PurchaseCourse/></ProtectedRoute>} />
        <Route path="/instructions" element={<ProtectedRoute><Instruction/></ProtectedRoute>} />
        <Route path="/exam-guideline" element={<ProtectedRoute><ExamGuideline/></ProtectedRoute>}/>
        <Route path="/result-and-report" element={<ProtectedRoute><ResultReport/></ProtectedRoute>} />
        <Route path="/practice-books" element={<ProtectedRoute><PracticeEBook/></ProtectedRoute>} />
        <Route path="/order-summary" element={<ProtectedRoute><OrderSummary/></ProtectedRoute>} />
        <Route path="/after-report" element={<ProtectedRoute><AfterReport/></ProtectedRoute>} />
        <Route path="/activity-logs" element={<ProtectedRoute><ActivityLog/></ProtectedRoute>} />
        <Route path="/faqs" element={<ProtectedRoute><FAQs/></ProtectedRoute>}/>
        <Route path="/faqs-ticket" element={<ProtectedRoute><Ticket/></ProtectedRoute>}/>
        <Route path="/ticket-history" element={<ProtectedRoute><TicketHistory/></ProtectedRoute>} />
        <Route path="/olympiad-syllabus" element={<ProtectedRoute><OlymSyllabus/></ProtectedRoute>} />
        <Route path="/account-setting" element={<ProtectedRoute><AccountSettings/></ProtectedRoute>} />
        <Route path="/user-profile" element={<ProtectedRoute><DashUserProfile/></ProtectedRoute>} />
        <Route path="/user-notification" element={<ProtectedRoute><DashNotification/></ProtectedRoute>} />
        <Route path="/address-manager" element={<ProtectedRoute><AddressManager/></ProtectedRoute>} />
        <Route path="/user-orders" element={<ProtectedRoute><MyOrdersComp/></ProtectedRoute>} />
        <Route path="/transaction-history" element={<ProtectedRoute><TransactionHistory/></ProtectedRoute>} />
        <Route path="/add-student" element={<ProtectedRoute><AddStudent/></ProtectedRoute>} />
        {/* <Route path="/quiz" element={<ProtectedRoute><Quiz/></ProtectedRoute>} /> */}
        
      </Routes>
    </>
  );
} 
export default App;
