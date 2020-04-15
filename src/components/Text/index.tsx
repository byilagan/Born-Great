// React
import * as React from "react";
import { FC, ReactNode } from "react";

// Styles
import styles from "./styles.module.scss";

// Types
import { TextProps } from "./types";

const Text: FC<TextProps> = ({ tag = "p", style = "body", children }) => {
  const Tag: ReactNode = tag;
  const props = {
    className: styles[style],
  };

  //@ts-ignore
  return <Tag {...props}>{children}</Tag>;
};

Text.displayName = "Text";

export { Text };
