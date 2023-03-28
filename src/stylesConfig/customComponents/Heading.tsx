export const HeadingStyle = {
  // style object for base or default style
  baseStyle: {
    color: "#ffffff",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    h1: {
      fontSize: "64px",
      fontWeight: "700",
      lineHeight: "82px",
      color: "#ffffff",
    },
    h2: {
      fontSize: ["24px", "56px"],
      fontWeight: "700",
      lineHeight: ["30px", "70px"],
      color: "#000000",
    },
    h3: {
      fontSize: ["8px", "8px", "24px"],
      fontWeight: ["600", "500"],
      lineHeight: ["10px", "10px", "30px"],
      color: "#ffffff",
    },
    h4: {
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "23px",
      color: "#ffffff",
    },
    h5: {
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: ["8px", "8px", "21.6px"],
      color: "#000000",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "primary",
  },
};
