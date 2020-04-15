// React
import * as React from "react";
import { FC } from "react";

// Styles
import styles from "./styles.module.scss";

// Libs
import { useStaticQuery, graphql } from "gatsby";

// Components
import { Navbar } from "../Navbar";

const Layout: FC<any> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={styles.Layout}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

Layout.displayName = "Layout";

export { Layout };
