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
  Box,
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
          "repeat(6,1fr)",
          "repeat(9,1fr)",
        ]}
        w="full"
        columnGap="80px"
        rowGap={"32px"}
      >
        <GridItem colSpan={[1, 1, 2]}>
          <Logo />
          <Text color="white" fontSize={"16px"} fontWeight="400" my="26px">
            Reach out to us on any of our social media networks
          </Text>
          <Flex gap="30px" w="full">
            <FaFacebook cursor={"pointer"} color="#2A2A2B" size="32px" />
            <FaTwitter cursor={"pointer"} color="#2A2A2B" size="32px" />
            <FaYoutube cursor={"pointer"} color="#2A2A2B" size="32px" />
            <FaInstagram cursor={"pointer"} color="#2A2A2B" size="32px" />
            <FaDiscord cursor={"pointer"} color="#2A2A2B" size="32px" />
          </Flex>
        </GridItem>
        <GridItem colSpan={[1, 1, 2]}>
          <Box w="100%">
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
          </Box>
        </GridItem>
        <GridItem colSpan={[1, 1, 2]}>
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
        <GridItem colSpan={[1, 1, 1, 3]}>
          <Heading
            fontSize={["24px", "24px", "32px"]}
            fontWeight="600"
            color="white"
            mb="32px"
          >
            Subscribe Us
          </Heading>
          <InputGroup w="full" h="46px">
            <Input
              outline="0px"
              color="white"
              h="full"
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
              <Button
                my="auto"
                borderRadius="0px 2px 2px 0px"
                px="15.5px"
                _hover={{}}
                _active={{}}
                py="13.5px"
                fontSize={"14px"}
                fontWeight="500"
                bg="pryColor"
                color="white"
                h="46px"
                variant={"solid"}
              >
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
