// React
import * as React from "react";
import { FC } from "react";

// Styles
import * as styles from "./styles.module.scss";

// Libs
import { Link } from "gatsby";

// Components
import { Text } from "../Text";
import { AnimatedIcon } from "../AnimatedIcon";

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

const menu: any = {
  home: "Home",
  "about us": "About Børn Great",
  contact: "Contact Us",
  "terms & conditions": "Terms & Conditions",
};

const Menu: FC = () => {
  const renderCategories = () => {
    return (
      <div className={styles.Categories}>
        {categories.map((c, i) => (
          <Link key={`${c}-${i}`} to={`posts/${c}`}>
            <AnimatedIcon icon={c} />
            <Text style="subheader"> {c.toUpperCase()} </Text>
          </Link>
        ))}
      </div>
    );
  };

  const renderMainNav = () => {
    return (
      <div className={styles.MainNav}>
        {Object.keys(menu).map((k, i) => (
          <Link key={`${k}-${i}`} to={k}>
            <Text style="subheader"> {menu[k].toUpperCase()} </Text>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.Menu}>
      <div className={styles.MenuContent}>
        {renderCategories()}
        {renderMainNav()}
      </div>
    </div>
  );
};

Menu.displayName = "Menu";

export { Menu };
