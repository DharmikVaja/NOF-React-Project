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
import RegModal from "./Component/Modal/RegisterModal/RegModal";
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

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route
          path="/product"
          element={<Product country={"India"} class={"6"} />}
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
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/school-login" element={<SchoolLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user-dashboard" element={<Dashboard />} />
        <Route path="/select-test" element={<SelectTest />} />
        <Route path="/demo-test" element={<DemoTest />} />
        <Route path="/instructions" element={<Instruction />} />
        <Route path="/exam-guideline" element={<ExamGuideline />} />
        <Route path="/result-and-report" element={<ResultReport />} />
        <Route path="/practice-books" element={<PracticeEBook />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/after-report" element={<AfterReport />} />
        <Route path="/activity-logs" element={<ActivityLog />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/faqs-ticket" element={<Ticket />} />
        <Route path="/ticket-history" element={<TicketHistory />} />
        <Route path="/olympiad-syllabus" element={<OlymSyllabus />} />
        <Route path="/account-setting" element={<AccountSettings />} />
        <Route path="/user-profile" element={<DashUserProfile />} />
        <Route path="/user-notification" element={<DashNotification />} />
        <Route path="/address-manager" element={<AddressManager />} />
        <Route path="/user-orders" element={<MyOrdersComp />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </>
  );
}
export default App;
