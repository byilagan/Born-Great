// React
import * as React from "react";
import { FC } from "react";

// Styles
import * as styles from "./styles.module.scss";

// Components
import { Layout } from "../../components/Layout";
import SEO from "../../components/seo";

const BlogList: FC<any> = props => {
  const { pageContext } = props;

  return (
    <Layout>
      <SEO title="BlogList" />
      {pageContext.category}
    </Layout>
  );
};

BlogList.displayName = "BlogList";

export default BlogList;
