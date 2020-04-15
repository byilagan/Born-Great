// React
import * as React from "react";
import { FC } from "react";

// Styles
import styles from "./styles.module.scss";

// Components
import { MenuButton } from "./MenuButton";
import { Text } from "../Text";

const Navbar: FC<any> = () => {
  return (
    <nav className={styles.Navbar}>
      <Text style="quote">børn great</Text>
      <MenuButton />
    </nav>
  );
};

Navbar.displayName = "Navbar";

export { Navbar };
