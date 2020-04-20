// React
import * as React from "react";
import { FC } from "react";

// Styles
import styles from "./styles.module.scss";

const MenuButton: FC<any> = ({ onClick }) => {
  return (
    <div className={styles.MenuButton} onClick={onClick}>
      <span />
      <span />
      <span />
    </div>
  );
};

MenuButton.displayName = "MenuButton";

export { MenuButton };
