import React from "react";
import styles from "./active-label.module.css";

export default function ActiveLabel({ children }) {
  return <span className={styles.label}>{children}</span>;
}
