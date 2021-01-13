import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./favicon.png";



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  // const [inHover, setHover] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  
  let  intwindow = window.innerWidth;

  if(intwindow > 600){
    window.onscroll = function () {
      scrollFunction();
  };
  }else{
    window.onscroll = function () {
      scrollFunction2();
  };
}


  function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      document.querySelector(".navbar1").style.height = "70px";
      document.querySelector(".navbar1").style.fontSize = "1rem";
      document.querySelector(".nav1-logo").style.fontSize = "1.3rem";
      document.querySelector(".nav1-logo").style.transitionDuration = "1s";
      document.querySelector(".navbar1").style.backgroundColor = "black";
      document.querySelector(".navbar1").style.transitionDuration = "1s";
      document.querySelector(".menu-icon").style.fontSize = "1.4rem";
      document.querySelector(".menu-icon").style.transitionDuration = "1s";
    } else {
      document.querySelector(".navbar1").style.height = "120px";
      document.querySelector(".navbar1").style.fontSize = "1.2rem";
      document.querySelector(".nav1-logo").style.fontSize = "1.8rem";
      document.querySelector(".navbar1").style.backgroundColor =
        "rgba(0, 0, 0,0)";
      document.querySelector(".navbar1").style.transitionDuration = "1s";
      document.querySelector(".nav1-logo").style.transitionDuration = "1s";
      document.querySelector(".menu-icon").style.fontSize = "2rem";
      document.querySelector(".menu-icon").style.transitionDuration = "1s";
    }
  }

  function scrollFunction2() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      document.querySelector(".navbar1").style.height = "90px";
      document.querySelector(".navbar1").style.fontSize = "1rem";
      document.querySelector(".nav1-logo").style.fontSize = "1.5rem";
      document.querySelector(".nav1-logo").style.transitionDuration = "1s";
      document.querySelector(".navbar1").style.backgroundColor = "black";
      document.querySelector(".navbar1").style.transitionDuration = "1s";
      document.querySelector(".menu-icon").style.fontSize = "1.7rem";
      document.querySelector(".menu-icon").style.transitionDuration = "1s";
    } else {
      document.querySelector(".navbar1").style.height = "100px";
      document.querySelector(".navbar1").style.fontSize = "1.2rem";
      document.querySelector(".nav1-logo").style.fontSize = "1.2rem";
      document.querySelector(".navbar1").style.backgroundColor =
        "rgba(0, 0, 0,0)";
      document.querySelector(".navbar1").style.transitionDuration = "1s";
      document.querySelector(".nav1-logo").style.transitionDuration = "1s";
      document.querySelector(".menu-icon").style.fontSize = "1.9rem";
      document.querySelector(".menu-icon").style.transitionDuration = "1s";
    }
  }


  window.addEventListener("resize", showButton);

  return (
    <>
      {/* <div className="gap"></div> */}
      <nav className="navbar1">
        <div className="navbar1-container">
          <div className="nav1-logo" onClick={closeMobileMenu}>
            <a href="/">
              <div id="logo" style={{ margin: "auto" }}>
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: "45px", width: "45px" }}
                ></img>
              </div>
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              <div id="brand" style={{ paddingLeft: "" }}>
                Brotherhood Infotech
              </div>
            </a>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav1-menu active" : "nav1-menu"}>
            <li className="nav1-item">
              <Link
                to="/"
                className="nav1-links"
                style={{ textDecoration: "none" }}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav1-item">
              <Link
                to="/about"
                className="nav1-links"
                style={{ textDecoration: "none" }}
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav1-item">
              <Link
                to="/services"
                className="nav1-links"
                onClick={closeMobileMenu}
                style={{ textDecoration: "none" }}
              >
                Services
              </Link>
            </li>
            <li className="nav1-item">
              <Link
                to="/products"
                className="nav1-links"
                onClick={closeMobileMenu}
                style={{ textDecoration: "none" }}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav1-item">
              <Link
                to="/team"
                className="nav1-links"
                style={{ textDecoration: "none" }}
                onClick={closeMobileMenu}
              >
                Team
              </Link>
            </li>
            <li className="nav1-item" id="dropdown">
              <Link className="nav1-links" style={{ textDecoration: "none" }}>
                <div className="dropdown">
                  <div className="dropbtn">
                    Career
                    <> </>
                    <i className="fa fa-caret-down"></i>
                  </div>
                  <div className="dropdown-content">
                    <Link to="/career/job" style={{ textDecoration: "none" }}   onClick={closeMobileMenu}>
                      Job Opening
                    </Link>
                  </div>
                </div>
              </Link>
            </li>
            <li className="nav1-item">
              <Link
                to="/contact"
                className="nav1-links"
                onClick={closeMobileMenu}
                style={{ textDecoration: "none" }}
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
