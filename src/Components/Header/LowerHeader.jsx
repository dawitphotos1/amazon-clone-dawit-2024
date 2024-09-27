import React, { useState, useEffect } from "react"; // Import useState and useEffect
import PropTypes from "prop-types";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function LowerHeader({ classes }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage open/close
  const [isMobile, setIsMobile] = useState(false); // State to manage mobile view

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the state
  };

  // Effect to check if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={classes.lower__container}>
      {isMobile ? (
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          <AiOutlineMenu aria-label="Menu" />
        </button>
      ) : null}

      <ul className={isOpen || !isMobile ? "active" : ""}>
        <li>
          <Link to="/all" aria-label="All categories">
            All
          </Link>
        </li>
        {!isMobile && (
          <>
            <li>
              <Link to="/deals" aria-label="Today's Deals">
                Today&apos;s Deals
              </Link>
            </li>
            <li>
              <Link to="/customer-service" aria-label="Customer Service">
                Customer Service
              </Link>
            </li>
            <li>
              <Link to="/registry" aria-label="Registry">
                Registry
              </Link>
            </li>
            <li>
              <Link to="/gift-cards" aria-label="Gift Cards">
                Gift Cards
              </Link>
            </li>
            <li>
              <Link to="/sell" aria-label="Sell">
                Sell
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

LowerHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default LowerHeader;
