import React from "react";
import styles from "./styles.module.scss";
import { number } from "prop-types";

const Navbar = ({ tasksNumber }) => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.text}>Task List: {tasksNumber} tasks</span>
    </nav>
  );
};

Navbar.propTypes = {
  tasksNumber: number,
};

export default Navbar;
