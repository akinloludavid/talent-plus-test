import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const ErrorPage = () => {
  return (
    <Flex justify={"center"} align="center" w="100vw" h="100vh">
      <Heading color="pryColor">Page not found</Heading>
    </Flex>
  );
};

export default ErrorPage;
