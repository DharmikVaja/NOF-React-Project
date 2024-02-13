import About from "./Component/About/About";
import AboutTele from "./Component/AboutTele/AboutTele";
import Content from "./Component/Content/Content";
import ContentMiddle from "./Component/ContentMiddle/ContentMiddle";
import Footer from "./Component/Footer/Footer";
import SubmitForm from "./Component/Form/SubmitForm";
import Header from "./Component/Header/Header";
import Map from "./Component/Map/Map";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <AboutTele />
      <ContentMiddle />
      <About />
      <SubmitForm />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
