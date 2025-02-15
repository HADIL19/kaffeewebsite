import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./footer.jsx";
import Kaffee from "./kaffee.jsx";
import Home from "./home.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Kaffee />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
