import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"

function App() {
  return (
    <Container>
      Hi
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  );
}

export default App
