import React from "react";
import "./styles/Footer.css";
import Logo from "./assets/logo_vertical.png";
import Link from "./LinkProperties";
import { NavLink } from "react-router-dom";

const links = Link.links;
const socials = Link.socials;
const NavBar = (props) => {
  const navBar = props.data.map((links) => {
    const text = links.text;
    const url = links.url;
    return (
        <li key={url}><NavLink to={url} className="footer-url">{text}</NavLink></li>
    );
  });
  return navBar;
}
const ExternalLink = (props) => {
  const externalLink = props.data.map((links) => {
    const text = links.text;
    const url = links.url;
    return (
        <li key={url}><a href={url} className="footer-url" target="_blank" rel="noreferrer">{text}</a></li>
    );
  });
  return externalLink;
}

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                <div className="footer-content">
                    <NavLink to="/">
                        <img src={ Logo } alt="Little Lemon logo" />
                    </NavLink>
                    <div className="doormat-nav">
                        <h5>DOORMAT NAVIGATION</h5>
                        <ul>
                            <NavBar data={links} />
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT</h5>
                        <ul>
                            <li>Address: 0123 Manila, Philippines</li>
                            <li>Tel: 020 7928 0678</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>SOCIAL MEDIA LINKS</h5>
                        <ul>
                            <ExternalLink data={socials} />
                        </ul>
                    </div>
            </div>
            <div className="copyright">
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
