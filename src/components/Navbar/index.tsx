// React
import * as React from "react";
import { FC, useState } from "react";

// Libs
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import cx from "classnames";

// Styles
import styles from "./styles.module.scss";

// Components
import { MenuButton } from "./MenuButton";
import { Menu } from "./Menu";
import { Text } from "../Text";

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Logo
  const image = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo/bgLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const classes = cx(styles.NavbarContainer, menuOpen && styles.isOpen);

  return (
    <div className={classes}>
      <Menu />
      <nav className={styles.Navbar}>
        <Link to="/">
          <Img fluid={image.placeholderImage.childImageSharp.fluid} />
        </Link>
        <Link to="/">
          <Text style="brand2">børn great</Text>
        </Link>
        <MenuButton onClick={() => setMenuOpen(!menuOpen)} />
      </nav>
    </div>
  );
};

Navbar.displayName = "Navbar";

export { Navbar };
