import { Link } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import logodark from "../../assets/images/Cloudesign-Logo.14a21297.svg";
import logowhite from "../../assets/images/white-logo.80467766.svg";
import close from "../../assets/images/cross-menu-icon.1454274e.svg";
import Hamburger from "../../assets/images/menuIcon.cee6cfc9.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const desktopNavVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const desktopNavItemVariants = {
    hidden: { opacity: 0, y: "-50%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const mobileNavVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.5 } },
  };

  const mobileNavItemVariants = {
    hidden: { opacity: 0, y: "-50%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logowhite} alt="Logo" width="258" height="48" />
          </Link>
        </div>
        <motion.nav
          className="navbar p-0"
          initial="hidden"
          animate="visible"
          variants={desktopNavVariants}
        >
          <ul className="nav-links">
            <motion.li key="home" variants={desktopNavItemVariants}>
              <Link to="/">Home</Link>
            </motion.li>

            <motion.li
              key="services"
              variants={desktopNavItemVariants}
              className="dropdown"
            >
              <Link to="/services">Services</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/">Demo1</Link>
                </li>
                <li>
                  <Link to="/">Demo2</Link>
                </li>
              </ul>
            </motion.li>

            {["About", "Our Work", "Careers", "Blog"].map((item, index) => (
              <motion.li key={index} variants={desktopNavItemVariants}>
                <Link >
                  {item}
                </Link>
              </motion.li>
            ))}

            <motion.li variants={desktopNavItemVariants} className="navbtnli">
              <Link to="/">
                <button className="navbtn">Let's Collaborate</button>
              </Link>
            </motion.li>
          </ul>
        </motion.nav>
      </header>

      {/* Responsive Navbar */}
      <header className="res-header">
        <div className="res-logo d-res">
          <Link to="/">
            <img src={logowhite} alt="Logo" width="258" height="48" />
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <img src={Hamburger} alt="menu" />
        </div>
      </header>

      <motion.nav
        className={`res-navbar ${isOpen ? "open" : ""} d-res`}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="exit"
        variants={mobileNavVariants}
      >
        <motion.ul>
          <motion.li
            className="closebtn d-res"
            variants={mobileNavItemVariants}
          >
            <Link to="/">
              <img src={logodark} alt="Logo" width="258" height="51" />
            </Link>
            <img src={close} alt="close" onClick={toggleMenu} />
          </motion.li>

          <motion.li key="home" variants={mobileNavItemVariants}>
            <Link to="/">Home</Link>
          </motion.li>

          <motion.li
            key="services"
            variants={mobileNavItemVariants}
            className="dropdown"
          >
            <div className="dropdown-header" onClick={toggleDropdown}>
              <Link to="/services" className="dropdown-link">
                Services
              </Link>
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`dropdown-icon ${isDropdownOpen ? "rotate" : ""}`}
                style={{ marginLeft: "8px", marginBottom: "2px" }}
              />
            </div>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/demo1" onClick={toggleMenu}>
                    Demo1
                  </Link>
                </li>
                <li>
                  <Link to="/demo2" onClick={toggleMenu}>
                    Demo2
                  </Link>
                </li>
              </ul>
            )}
          </motion.li>

          {["About", "Our Work", "Careers", "Blog"].map((item, index) => (
            <motion.li key={index} variants={mobileNavItemVariants}>
              <Link
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={toggleMenu}
              >
                {item}
              </Link>
            </motion.li>
          ))}

          <motion.li variants={mobileNavItemVariants}>
            <Link to="/contact">
              <button className="navbtn">Let's Collaborate</button>
            </Link>
          </motion.li>

          <motion.li
            className="bar d-res"
            variants={mobileNavItemVariants}
          ></motion.li>
          <motion.li
            className="nav-social d-res"
            variants={mobileNavItemVariants}
          >
            <p>Follow</p>
            <div>
              <img
                src="https://www.cloudesign.com/images/service_instagram.svg"
                alt="Instagram"
              />
              <img
                src="https://www.cloudesign.com/images/servicefacebook.svg"
                alt="Facebook"
              />
              <img
                src="https://www.cloudesign.com/images/service_linkedin.svg"
                alt="LinkedIn"
              />
              <img
                src="https://www.cloudesign.com/images/service_twitter.svg"
                alt="Twitter"
              />
            </div>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </>
  );
};

export default Header;
