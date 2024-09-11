import React from "react";
import TemporaryDrawer from "./drawer";
import "./styles.css";
import Button from "../Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <h1 className="logo">
        Crypto Hub<span style={{ color: "var(--blue)" }}>.</span>
      </h1>

      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/dashboard">
          <Button text={"Dashboard"} />
        </Link>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
