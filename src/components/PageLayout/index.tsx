import { Box } from "@chakra-ui/react";
import { IChildren } from "../../types";
import Footer from "../Footer";
import Navbar from "../Navbar";

const PageLayout = ({ children }: IChildren) => {
  return (
    <Box
      minH="100vh"
      w="100vw"
      display={"flex"}
      flexDir="column"
      maxW="1920px"
      mx="auto"
    >
      <Navbar />
      {children}
      <Box mt="auto">
        <Footer />
      </Box>
    </Box>
  );
};

export default PageLayout;
