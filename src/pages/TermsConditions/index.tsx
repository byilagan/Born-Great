// React
import * as React from "react";
import { FC } from "react";

// Styles
import * as styles from "./styles.module.scss";

// Components
import { Layout } from "../../components/Layout";
import SEO from "../../components/seo";

const TermsConditions: FC = () => {
  return (
    <Layout>
      <SEO title="Terms & Conditions" />
      Terms & Conditions
    </Layout>
  );
};

TermsConditions.displayName = "TermsConditions";

export default TermsConditions;
