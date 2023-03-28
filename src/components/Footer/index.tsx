import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MainContainer from "../../layout/MainContainer";
import Logo from "../Logo";
import { communityLinks, navLinks } from "../Navbar/data";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <MainContainer
      pt={["40px", "80px", "166px"]}
      pb={["164px", "240px", "300px"]}
      bg="#000F24"
    >
      <Grid
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",

          "repeat(5,1fr)",
        ]}
        columnGap="80px"
        rowGap={"32px"}
      >
        <GridItem>
          <Logo />
          <Text color="white" fontSize={"16px"} fontWeight="400" my="26px">
            Reach out to us on any of our social media networks
          </Text>
          <Flex gap="30px">
            <FaFacebook color="#2A2A2B" size="32px" />
            <FaTwitter color="#2A2A2B" size="32px" />
            <FaYoutube color="#2A2A2B" size="32px" />
            <FaInstagram color="#2A2A2B" size="32px" />
            <FaDiscord color="#2A2A2B" size="32px" />
          </Flex>
        </GridItem>
        <GridItem>
          <Heading
            fontSize={["24px", "24px", "32px"]}
            fontWeight="600"
            color="white"
            mb="32px"
          >
            Useful Links
          </Heading>
          <Flex flexDirection={["column"]} gap="16px">
            {navLinks.map((el) => (
              <Link
                color="white"
                key={el.label}
                fontSize={["16px", "16px", "24px"]}
                fontWeight="400"
                _hover={{ textDecoration: "none" }}
                onClick={() => navigate(el.route)}
              >
                {el.label}
              </Link>
            ))}
          </Flex>
        </GridItem>
        <GridItem>
          <Heading
            fontSize={["24px", "24px", "32px"]}
            fontWeight="600"
            color="white"
            mb="32px"
          >
            Community
          </Heading>
          <Flex flexDirection={["column"]} gap="16px">
            {communityLinks.map((el) => (
              <Link
                color="white"
                key={el.label}
                fontSize={["16px", "16px", "24px"]}
                fontWeight="400"
                _hover={{ textDecoration: "none" }}
                onClick={() => navigate(el.route)}
              >
                {el.label}
              </Link>
            ))}
          </Flex>
        </GridItem>
        <GridItem colSpan={[1, 1, 1, 2]}>
          <Heading
            fontSize={["24px", "24px", "32px"]}
            fontWeight="600"
            color="white"
            mb="32px"
          >
            Subscribe Us
          </Heading>
          <InputGroup w="full">
            <Input
              outline="0px"
              _focus={{
                outline: "0px",
              }}
              _focusVisible={{
                border: "1px solid #054FB3",
              }}
              placeholder="nft123@gmail.com"
              _placeholder={{
                color: "#424141",
              }}
              bg="#2A2A2B"
              border="1px solid #054FB3"
            />
            <InputRightElement w="auto">
              <Button px="15.5px" h="100%" fontSize={"14px"} fontWeight="500">
                send message
              </Button>
            </InputRightElement>
          </InputGroup>
        </GridItem>
      </Grid>
    </MainContainer>
  );
};

export default Footer;
