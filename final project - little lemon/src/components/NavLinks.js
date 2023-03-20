import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Link from "./LinkProperties";
const links = Link.links;
const animateFrom = {opacity: 0, y: -40};
const animateTo = {opacity: 1, y: 0};

const NavBar = (props) => {
  const navBar = props.data.map((links) => {
    const text = links.text;
    const url = links.url;
    const delay = links.delay;
    return (
      <motion.li
      initial={animateFrom}
      animate={animateTo}
      transition={{delay}}
      onClick={() => props.isMobile && props.closeMobileMenu()}
      key={url}
      >
        <NavLink to={url} className="active-links">{text}</NavLink>
      </motion.li>
    );
  });
  return navBar;
}


const NavLinks = (props) => {
  return (
    <motion.ul className="menu-items" initial={animateFrom} animate={animateTo} transition={{delay: 0.05}}>
            <NavBar data={links} />
        </motion.ul>
  )
}

export default NavLinks;