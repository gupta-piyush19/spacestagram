import React from "react";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
