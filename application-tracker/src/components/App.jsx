import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Job from "./Job";
import AddJob from "./Modal";


function App() {
  return (
    <div>
      <Header />
      <Job />
      <AddJob />
      <Footer />
    </div>
  );
}

export default App;
