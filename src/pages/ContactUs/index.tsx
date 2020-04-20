// React
import * as React from "react";
import { FC } from "react";

// Styles
import * as styles from "./styles.module.scss";

// Components
import { Layout } from "../../components/Layout";
import SEO from "../../components/seo";

const ContactUs: FC = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      Contact Us
    </Layout>
  );
};

ContactUs.displayName = "ContactUs";

export default ContactUs;
