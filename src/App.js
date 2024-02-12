import About from "./Component/About/About";
import Content from "./Component/Content/Content";
import ContentMiddle from "./Component/ContentMiddle/ContentMiddle";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Form from "./Component/SubmitForm/Form";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
      <ContentMiddle />
      <About />
      <Form />
    </div>
  );
}

export default App;
