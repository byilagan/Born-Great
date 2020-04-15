// React
import React from "react";
import { FC } from "react";

// Styles
import "./styles.scss";

// Libs
import { Link } from "gatsby";

// Components
import { Layout } from "../components/Layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { Text } from "../components/Text";

const IndexPage: FC<any> = () => (
  <Layout>
    <SEO title="Home" />
    <Text style="title">Hi people</Text>
    <Text style="header">Welcome to your new Gatsby site.</Text>
    <Text style="subheader">Now go build something great.</Text>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
