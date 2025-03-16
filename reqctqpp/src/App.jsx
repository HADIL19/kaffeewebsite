import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header.jsx";
import Footer from "./assets/components/footer.jsx";
import Kaffee from "./assets/components/kaffee.jsx";
import Home from "./assets/components/home.jsx";
import Services from "./assets/components/Services.jsx";



import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

const Card = ({ coffee }) => {
  const [like, setlike] = useState(false);

  useEffect(() => {
    console.log(`${coffee} has been sold out`);
  }, [coffee]); 

  return (
    <div className="card">
      <h2>{coffee}</h2> 
      <button onClick={() => setlike(!like)}>
        {like ? "Sold Out" : "Buy Now"}
      </button> 
    </div>
  );
}

Card.propTypes = {
  coffee: PropTypes.string.isRequired,
};

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Kaffee />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Card coffee={"Espresso"} />
        <Card coffee={"Latte"} />
        <Card coffee={"Cappuccino"} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
