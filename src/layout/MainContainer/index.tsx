import { Box, BoxProps } from "@chakra-ui/react";
import { forwardRef, ReactNode } from "react";

interface IMainContainer extends BoxProps {
  children: ReactNode;
}
const MainContainer = forwardRef(({ children, ...rest }: IMainContainer) => {
  return (
    <Box
      bg="#F8F9FC"
      px={["24px", "24px", "24px", "48px", "120px"]}
      w="100%"
      {...rest}
    >
      {children}
    </Box>
  );
});

export default MainContainer;
