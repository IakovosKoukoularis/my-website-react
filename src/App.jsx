
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";

import NewsBar from "./components/NewsBar";
import Card from "./components/ProductCard";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
      {/* <NewsBar />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div> */}
    </>
  )
}

export default App
