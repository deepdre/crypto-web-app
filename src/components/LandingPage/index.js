import React from "react";
import "./styles.css";
import Button from "../Common/Button";
import iphone from "../../assets/iphone.png";
import gradient from "../../assets/gradient.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//we are using framer motion library here.

function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="track-crypto-heading"
        >
          Track crypto
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="real-time-heading"
        >
          Real Time.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="info-text"
        >
          Visit the dashboard to find the top 100 coins.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="btn-flex"
        >
          <Link to="/dashboard">
            <Button text={"dashboard"} />
          </Link>
        </motion.div>
      </div>
      <div className="phone-container">
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          src={iphone}
          className="iphone"
        />
        <img src={gradient} className="gradient" alt="gradient background" />
      </div>
    </div>
  );
}

export default MainComponent;
