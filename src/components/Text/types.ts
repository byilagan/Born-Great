type TextStyle =
  | "title"
  | "header"
  | "subheader"
  | "quote"
  | "body"
  | "caption";

export type TextProps = {
  tag?: string;
  style?: TextStyle;
};
