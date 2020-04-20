type TextStyle =
  | "title"
  | "header"
  | "subheader"
  | "quote"
  | "body"
  | "caption"
  | "brand"
  | "brand2";

export type TextProps = {
  tag?: string;
  style?: TextStyle;
};
