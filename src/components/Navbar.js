import React from "react";
import styles from "./Navbar.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiNasa } from "react-icons/si";
import { FiCodepen } from "react-icons/fi";

const Navbar = () => {
  const navbarLinks = [
    {
      href: "https://github.com/gupta-piyush19",
      icon: <BsGithub />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/piyushgupta19/",
      icon: <BsLinkedin />,
      label: "Linkedin",
    },
    {
      href: "https://codepen.io/Piyush0_0",
      icon: <FiCodepen />,
      label: "Codepen",
    },
    {
      href: "https://api.nasa.gov/",
      icon: <SiNasa />,
      label: "Nasa",
    },
  ];
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_content}>
        <h1 className={styles.navbar__heading}>Spacestagram</h1>
        <div className={styles.navbar__links}>
          {navbarLinks.map((link) => (
            <div className={styles.navbar__link} key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
