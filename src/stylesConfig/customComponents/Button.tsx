import { colors } from "./colors";

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    outline: "none",
    _focus: { boxShadow: "none" },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props: any) => ({
      bg: "pryColor",
      height: ["28px", "28px", "54px"],
      fontSize: ["8px", "8px", "16px"],
      fontWeight: "700",
      lineHeight: "19px",
      borderRadius: "4px",
      padding: "16px 32px",
      textTransform: "capitalize",
      color: colors.white,
    }),
    secondary: (props: any) => ({
      bg: "#FFFFFF",
      height: ["28px", "28px", "54px"],
      fontSize: ["8px", "8px", "16px"],
      fontWeight: "700",
      lineHeight: "19px",
      borderRadius: "4px",
      textTransform: "capitalize",
      padding: "16px 32px",
      color: colors.pryColor,
    }),
    outline: (props: any) => ({
      bg: "transparent",
      height: ["28px", "28px", "54px"],
      fontSize: ["8px", "8px", "16px"],
      fontWeight: "700",
      lineHeight: "19px",
      borderRadius: "4px",
      border: "1px solid #FFFFFF",
      textTransform: "capitalize",
      padding: "16px 32px",
      color: colors.white,
      _hover: {},
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "primary",
  },
};
