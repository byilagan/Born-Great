// React
import * as React from "react";
import { FC } from "react";

// Styles
import * as styles from "./styles.module.scss";

// Types
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ children, onClick, customClass }) => {
  const props = {
    onClick,
    className: `${styles.Button} ${customClass}`,
  };

  return <button {...props}>{children}</button>;
};

Button.displayName = "Button";

export { Button };
