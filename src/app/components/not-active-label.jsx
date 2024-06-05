import React from "react";
import styles from "./not-active-label.module.css";

export default function NotActiveLabel({ children }) {
  return <span className={styles.label}>{children}</span>;
}
