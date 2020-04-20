// React
import React from "react";
import { FC } from "react";

// Styles
import "./styles.scss";

// Components
import { Layout } from "../components/Layout";
import SEO from "../components/seo";

// Views
import { Hero } from "../views/Hero";

const IndexPage: FC<any> = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
);

export default IndexPage;
