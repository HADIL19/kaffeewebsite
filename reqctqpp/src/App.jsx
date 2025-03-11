import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./footer.jsx";
import Kaffee from "./kaffee.jsx";
import Home from "./home.jsx";
import Services from "./services.jsx";
import "./App.css";
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

const Card = ({coffee}) => {
  const [like, setlike] = useState(false);
  useEffect(() => {
    console.log('${coffee} has been sold out ')});
  return (
    <div className="card ">
      <h2>{coffee}</h2> 

      <button onClick = {() => setlike(!like)} >
        {like ?  "Sold Out" :  "Buy Now"}
        </button> 
    </div>)
}

Card.propTypes = {
  coffee: PropTypes.string.isRequired,
  setcoffee: PropTypes.func.isRequired,
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
  <Card coffee={"Espresso"}  />
  <Card coffee={"Latte"}  />
  <Card coffee={"Latte"} />
</main>
      <Footer />
    </Router>
  );
}

export default App;
