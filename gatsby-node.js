/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

const categories = [
  "culture",
  "fashion",
  "fitness",
  "food",
  "graphic design",
  "music",
  "photography",
  "videography",
  "video games",
  "all",
];

const menu = ["about us", "contact", "terms & conditions"];

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  categories.forEach(c => {
    let slug = `/${c}`;

    if (c == "all") {
      slug = "";
    }

    createPage({
      path: `posts${slug}`,
      component: path.resolve(`./src/pages/BlogList/index.tsx`),
      context: {
        type: "category",
        category: c,
      },
    });
  });

  menu.forEach(m => {
    let component;

    switch (m) {
      case "about us":
        component = path.resolve(`./src/pages/About/index.tsx`);
        break;
      case "contact":
        component = path.resolve(`./src/pages/ContactUs/index.tsx`);
        break;
      case "terms & conditions":
        component = path.resolve(`./src/pages/TermsConditions/index.tsx`);
        break;
      default:
        break;
    }

    createPage({
      path: m,
      component,
    });
  });
};
