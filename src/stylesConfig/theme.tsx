import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./customComponents/Button";
import { TextStyle as Text } from "./customComponents/Text";
import { HeadingStyle as Heading } from "./customComponents/Heading";
import { colors } from "./customComponents/colors";
const components = {
  Button,
  Text,
  Heading,
};
export const customTheme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Satoshi, sans-serif",
  },
  components,
  colors,
});
