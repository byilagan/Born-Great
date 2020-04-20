// React
import * as React from "react";
import { FC } from "react";

// Styles
import * as styles from "../Navbar/styles.module.scss";

// Libs
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

// Types
import { AnimatedIconProps } from "./types";

const iconQuery = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment squareGif on File {
    publicURL
  }

  query {
    culture: file(relativePath: { eq: "category/white/culture.png" }) {
      ...squareImage
    }
    fashion: file(relativePath: { eq: "category/white/fashion.png" }) {
      ...squareImage
    }
    fitness: file(relativePath: { eq: "category/white/fitness.png" }) {
      ...squareImage
    }
    food: file(relativePath: { eq: "category/white/food.png" }) {
      ...squareImage
    }
    graphic: file(relativePath: { eq: "category/white/graphic_design.png" }) {
      ...squareImage
    }
    music: file(relativePath: { eq: "category/white/music.png" }) {
      ...squareImage
    }
    photography: file(relativePath: { eq: "category/white/photography.png" }) {
      ...squareImage
    }
    videography: file(relativePath: { eq: "category/white/videography.png" }) {
      ...squareImage
    }
    videogames: file(relativePath: { eq: "category/white/videogames.png" }) {
      ...squareImage
    }

    cultureGif: file(relativePath: { eq: "category/gifs/culture.gif" }) {
      ...squareGif
    }
    fashionGif: file(relativePath: { eq: "category/gifs/fashion.gif" }) {
      ...squareGif
    }
    fitnessGif: file(relativePath: { eq: "category/gifs/fitness.gif" }) {
      ...squareGif
    }
    foodGif: file(relativePath: { eq: "category/gifs/food.gif" }) {
      ...squareGif
    }
    graphicGif: file(relativePath: { eq: "category/gifs/graphic_design.gif" }) {
      ...squareGif
    }
    musicGif: file(relativePath: { eq: "category/gifs/music.gif" }) {
      ...squareGif
    }
    photographyGif: file(
      relativePath: { eq: "category/gifs/photography.gif" }
    ) {
      ...squareGif
    }
    videographyGif: file(
      relativePath: { eq: "category/gifs/videography.gif" }
    ) {
      ...squareGif
    }
    videogamesGif: file(relativePath: { eq: "category/gifs/videogames.gif" }) {
      ...squareGif
    }
  }
`;

const AnimatedIcon: FC<AnimatedIconProps> = ({ icon }) => {
  const icons = useStaticQuery(iconQuery);

  const getImage = () => {
    let image: string;

    switch (icon) {
      case "graphic design":
        image = "graphic";
        break;
      case "video games":
        image = "videogames";
        break;
      default:
        image = icon;
        break;
    }

    return icons?.[image]?.childImageSharp?.fluid;
  };

  const getGif = () => {
    let gif: string;

    switch (icon) {
      case "graphic design":
        gif = "graphic";
        break;
      case "video games":
        gif = "videogames";
        break;
      default:
        gif = icon;
        break;
    }

    gif += "Gif";

    return icons?.[gif]?.publicURL;
  };

  return (
    <div className={styles.AnimatedIcon}>
      {getImage() && <Img fluid={getImage()} />}
      {getGif() && <img src={getGif()} />}
    </div>
  );
};

AnimatedIcon.displayName = "AnimatedIcon";

export { AnimatedIcon };
