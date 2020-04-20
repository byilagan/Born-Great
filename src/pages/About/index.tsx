// React
import * as React from "react";
import { FC } from "react";

// Styles
import * as styles from "./styles.module.scss";

// Components
import { Layout } from "../../components/Layout";
import SEO from "../../components/seo";

const About: FC = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      About
    </Layout>
  );
};

About.displayName = "About";

export default About;
