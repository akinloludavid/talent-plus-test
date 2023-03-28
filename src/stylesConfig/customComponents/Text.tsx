export const TextStyle = {
  // style object for base or default style
  baseStyle: {
    color: "#ffffff",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    body1: {
      fontSize: ["8px", "16px"],
      fontWeight: "500",
      lineHeight: ["16px", "26px"],
      color: "#E7E7E7",
      textTransform: "capitalize",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "body1",
  },
};
