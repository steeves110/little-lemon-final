import React, { useEffect, useState } from "react";
import "./styles/HeaderElement.css";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className="header" style={{ top: visible ? '0' : '-200px' }}>
      <div className="header-wrapper">
        <div className="image-wrapper">
          <NavLink to="/">{<div className="logo-img" alt = "Little Lemon logo"></div>}</NavLink>
        </div>
        <Navigation />
        <MobileNav />
      </div>
    </div>
  )
}

export default Navbar;