import About from "./Component/About/About";
import AboutTele from "./Component/AboutTele/AboutTele";
import Content from "./Component/Content/Content";
import ContentMiddle from "./Component/ContentMiddle/ContentMiddle";
import SubmitForm from "./Component/Form/SubmitForm";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
      <AboutTele />
      <ContentMiddle />
      <About />
      <SubmitForm />
    </div>
  );
}

export default App;
