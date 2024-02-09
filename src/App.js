import Content from "./Component/Content/Content";
import ContentMiddle from "./Component/ContentMiddle/ContentMiddle";
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
      <ContentMiddle />
    </div>
  );
}

export default App;
