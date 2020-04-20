// React
import * as React from "react";
import { FC } from "react";

// Styles
import * as styles from "./styles.module.scss";

// Libs
import { useStaticQuery, graphql } from "gatsby";

// Components
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

const Hero: FC<any> = () => {
  const image = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo/bgLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imageUrl = image.placeholderImage.childImageSharp.fluid.src;

  return (
    <div
      className={styles.Hero}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.HeroText}>
        <Text style="brand">
          <Text tag="span" style="brand2">
            {"børn great "}
          </Text>
          serves as a vessel to project our passions, and clue in our loyal
          readers as to what inspires us in this crazy world.
        </Text>
        <Text style="quote"> So, sit back, relax, and read on. </Text>
        <Button>
          <Text style="brand">enter</Text>
        </Button>
      </div>
    </div>
  );
};

Hero.displayName = "Hero";

export { Hero };
