import { Route, Routes} from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Container className="mb-4 item-list container">
        <Routes>
          <Route path="/" element={<Home /> }></Route>
          <Route path="/store" element={<Store /> }></Route>
          <Route path="/about" element={<About /> }></Route>
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
