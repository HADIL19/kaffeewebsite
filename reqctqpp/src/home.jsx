import { motion } from "framer-motion";
import { Coffee, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-coffee-light">Kaffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Your daily dose of premium coffee awaits.  
          Experience the perfect blend of tradition and innovation in every cup.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/menu")}
          className="hero-button"
        >
          Explore Our Menu <ArrowRight className="inline ml-2" />
        </motion.button>
      </div>
    </section>
  );
};

export default Home;
