import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { ShoppingBagProvider } from "./context/ShoppingBagContent";
import Cases from "./pages/Components/Case";
import Cooling from "./pages/Components/Cooling";
import CPU from "./pages/Components/CPU";
import GPU from "./pages/Components/GPU";
import Memory from "./pages/Components/Memory";
import Motherboard from "./pages/Components/Motherboard";
import Storages from "./pages/Components/Storage";
import PowerSupply from "./pages/Components/PowerSupply";
import All from "./pages/Components/All";

function App() {
  return (
    <ShoppingBagProvider>
      <Container className="mb-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/store/all" element={<All />} />
          <Route path="/store/cases" element={<Cases />} />
          <Route path="/store/cooling" element={<Cooling />} />
          <Route path="/store/cpu" element={<CPU />} />
          <Route path="/store/gpu" element={<GPU />} />
          <Route path="/store/memory" element={<Memory />} />
          <Route path="/store/motherboard" element={<Motherboard />} />
          <Route path="/store/powersupply" element={<PowerSupply />} />
          <Route path="/store/storage" element={<Storages />} />
        </Routes>
      </Container>
    </ShoppingBagProvider>
  );
}

export default App;
