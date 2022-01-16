import React from "react";
import styles from "./Footer.module.css";
import { FaReact, FaCss3Alt } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Special Thanks to NASA</p>
      <p>
        Made with love using <FaReact /> and <FaCss3Alt />
      </p>
    </footer>
  );
};

export default Footer;
