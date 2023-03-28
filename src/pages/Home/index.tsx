import {
  Flex,
  Heading,
  Box,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import MainContainer from "../../layout/MainContainer";
import { nanoid } from "nanoid";
import { categories, categoryLists, faqs, features } from "../../utils/data";
import FeatureCard from "../../components/FeatureCard";
import { useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import AccordionComponent from "../../components/AccordionComponent";
import { getFilteredObjects } from "../../utils/helpers";
import TestimonialCarousel from "../../components/Carousel";
import CommunitySection from "./CommunitySection";

const courseFeatures = [
  {
    label: "Audio Classes",
    image: "/assets/icons/volume_up.svg",
    bgColor: "#3FA96A33",
  },
  {
    label: "Live Classes",
    image: "/assets/icons/antenna.svg",
    bgColor: "#F79E8E33",
  },
  {
    label: "Recorded Classes",
    image: "/assets/icons/autoplay.svg",
    bgColor: "#9269CD33",
  },
  {
    label: "Audio Classes",
    image: "/assets/icons/description.svg",
    bgColor: "#5978CF33",
  },
];
const HomePage = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const filteredCategoryLists = getFilteredObjects(
    categoryLists,
    currentCategory
  );
  return (
    <Box>
      <MainContainer bg="pryColor">
        <Image
          src="/assets/hero/vector4.svg"
          position={"absolute"}
          left="0%"
          top="6%"
        />
        <Flex flexDir={["column", "column", "column", "row"]}>
          <Image
            src="/assets/hero/vector1.svg"
            position={"absolute"}
            w="16px"
            h="16px"
            left="10%"
            top="3%"
          />
          <Box
            position={"absolute"}
            w="10px"
            h="10px"
            rounded={"full"}
            left="40%"
            bg="#FFBE4E"
            top="3%"
          />
          <Box
            maxW={"700px"}
            pb="110px"
            textAlign={["center", "center", "left"]}
            pt={["0px", "0px", "120px"]}
            position={"relative"}
          >
            <Image
              src="/assets/hero/vector3.svg"
              w={["20%", "20%", "auto"]}
              position={"absolute"}
              right="5%"
              transform={["rotate(70deg)", "rotate(70deg)", "rotate(0deg)"]}
              bottom={["-2%", "-2%", "15%"]}
            />
            <Heading
              variant={"h1"}
              fontSize={["32px", "32px", "64px"]}
              as="h1"
              lineHeight={["46px", "46px", "82px"]}
              mb="16px"
            >
              Grow your skills to advance your career path{" "}
            </Heading>
            <Text mb="32px" maxW={"553px"}>
              build your future with our quality education. the best and largest
              all-in-one online tutoring platform in the world
            </Text>
            <Flex gap="24px" justify={["center", "center", "flex-start"]}>
              <Button
                variant={"outline"}
                _hover={{}}
                rightIcon={<FiArrowUpRight />}
              >
                get started now
              </Button>

              <Button variant="secondary">enroll now</Button>
            </Flex>
            <Flex
              align={"center"}
              justify={["center", "center", "flex-start"]}
              mx={["auto", "auto", 0]}
              mt="24px"
              gap="8px"
            >
              <Flex ml="16px">
                {new Array(5).fill(0).map((_, idx) => (
                  <Image
                    key={nanoid()}
                    w={["32px", "32px", "64px"]}
                    ml="-16px"
                    src={`/assets/frames/img${idx + 1}.png`}
                    alt="frames"
                  />
                ))}
              </Flex>
              <Box>
                <Heading fontSize={["14px", "14px", "24px"]} fontWeight="700">
                  255k+
                </Heading>
                <Text fontSize={["8px", "8px", "16px"]} fontWeight="500">
                  Previews
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box
            w={["100%", "100%", "100%", "100%", "800px"]}
            // mt={["100px", "100px", 0]}
            position={"relative"}
          >
            <Image
              src="/assets/hero/vector1.svg"
              position={"absolute"}
              w="30.4px"
              h="30.4px"
              left="10%"
              top="30%"
            />
            <Image
              src="/assets/hero/vector2.svg"
              position={"absolute"}
              w="30.4px"
              h="30.4px"
              right="5%"
              top="32%"
            />
            <Box
              position={"absolute"}
              w="10px"
              h="10px"
              rounded={"full"}
              left="10%"
              bg="#FFBE4E"
              bottom="20%"
            />
            <Image
              src="/assets/hero/vs-code.png"
              position={"absolute"}
              w={["48px", "48px", "93.6px"]}
              h={["48px", "48px", "93.6px"]}
              right="5%"
              top="5%"
            />
            <Image
              src="/assets/hero/figma.png"
              position={"absolute"}
              w={["48px", "48px", "93.6px"]}
              h={["48px", "48px", "93.6px"]}
              bottom="30%"
              left="-5%"
            />
            <Image
              src="/assets/hero/wordpress.png"
              position={"absolute"}
              w={["48px", "48px", "93.6px"]}
              h={["48px", "48px", "93.6px"]}
              bottom="5%"
              right="5%"
            />
            <Image
              src="/assets/hero/light.svg"
              position={"absolute"}
              w={["101px", "101px", "200.6px"]}
              h={["96px", "96px", "180.6px"]}
              top="5%"
              left="-20%"
            />
            <Image w="100%" src="/assets/hero-image.png" />
          </Box>
        </Flex>
      </MainContainer>
      <MainContainer
        bg="#CCDBF0"
        display={"flex"}
        justifyContent="center"
        gap={["20px", "20px", "20px", "20px", "72px"]}
        py="52px"
        px={["24px", "24px", "48px", "120px"]}
      >
        {new Array(5).fill(0).map((_, idx) => (
          <Image
            w={["15%", "15%"]}
            key={nanoid()}
            src={`/assets/brands/img${idx + 1}.svg`}
          />
        ))}
      </MainContainer>
      <MainContainer px={["24px", "24px", "24px", "48px", "166px"]}>
        <Flex
          h="auto"
          pt="96px"
          pb={["200px", "200px", "120px"]}
          gap="100px"
          flexDir={["column", "column", "column", "row"]}
        >
          <Box position={"relative"} textAlign={["center", "center", "left"]}>
            <Image
              src="/assets/hero/vector6.svg"
              position={"absolute"}
              left="-8%"
              top="-10%"
            />
            <Heading
              mb="16px"
              color="black"
              fontSize={["24px", "24px", "56px"]}
            >
              High quality video, audio & live classes
            </Heading>
            <Text color="#A1A1A1" mb="32px">
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </Text>
            <Button variant={"primary"} mb="24px">
              View Courses
            </Button>
            <Flex
              gap="24px"
              w={["auto", "auto", "480px"]}
              mx={["auto", "auto", "0"]}
              flexWrap={"wrap"}
            >
              {courseFeatures.map((el) => (
                <Flex
                  h={["36px", "36px", "72px"]}
                  // w="232px"
                  px={["16px", "16px", "24px"]}
                  py={["8px", "8px", "20px"]}
                  align={"center"}
                  borderRadius="8px"
                  bg="white"
                  gap={["8px", "18px", "16px"]}
                  key={nanoid()}
                >
                  <Box
                    w={["16px", "16px", "32px"]}
                    h={["16px", "16px", "32px"]}
                    borderRadius={"4px"}
                    bg={el.bgColor}
                    display={"flex"}
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <Image src={el.image} w={["8px", "8px", "12px"]} />
                  </Box>
                  <Text
                    color="black"
                    fontSize={["8px", "8px", "16px"]}
                    fontWeight="700"
                  >
                    {el.label}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Box>
          <Box
            w={["100%", "100%", "100%", "1000px"]}
            display="flex"
            flexDirection={"column"}
            position={"relative"}
            h="100%"
          >
            <Image
              w={["80%", "80%", "80%", "100%"]}
              ml="auto"
              src="/assets/images/img1.png"
            />
            <Image
              w="70%"
              // maxW={["174px", "174px", "100%"]}
              bottom={["-50%", "-50%", "-10%", "-30%"]}
              left={["0%", "0%", "0%", "-50%"]}
              src="/assets/images/img2.png"
              position={"absolute"}
            />
          </Box>
        </Flex>
      </MainContainer>

      <MainContainer
        pt="80px"
        pb="65px"
        display={"flex"}
        flexDir={["column", "column", "column", "column", "row"]}
        gap={["32px", "32px", "60px"]}
        position={"relative"}
      >
        <Image
          src="/assets/hero/vector7.svg"
          position={"absolute"}
          right={["0%", "0%", "30%"]}
          top="2%"
        />
        <Image
          src="/assets/hero/vector8.svg"
          w={["12px", "12px", "auto"]}
          position={"absolute"}
          left={["0%", "0%", "1%"]}
          bottom={["15%"]}
        />
        <Image
          src="/assets/hero/vector9.svg"
          w={["12px", "12px", "auto"]}
          position={"absolute"}
          right="1%"
          bottom={["35%", "35%", "5%"]}
        />
        <Box minW={["auto", "auto", "650px"]}>
          <Box textAlign={["center", "center", "left"]}>
            <Heading
              textTransform={"capitalize"}
              variant="h2"
              as="h2"
              fontSize={["24px", "24px", "56px"]}
              color="black"
              mb="16px"
            >
              This is why we are best from others
            </Heading>
            <Text color="#A1A1A1" mb="32px">
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </Text>
          </Box>
          <Image src="/assets/images/img3.png" w="720px" />
        </Box>
        <Box>
          <Grid
            templateColumns={["repeat(2,1fr)"]}
            gap={["8px", "8px", "24px"]}
            mt="40px"
          >
            {features.map((feature, idx) => (
              <GridItem key={nanoid()}>
                <FeatureCard {...feature} idx={"" + idx} />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </MainContainer>

      <MainContainer
        pt="80px"
        display={"flex"}
        alignItems="center"
        flexDir={"column"}
        position="relative"
      >
        <Image
          src="/assets/hero/vector10.svg"
          position={"absolute"}
          left={["5%", "5%", "10%"]}
          top={["2%", "2%", "15%"]}
        />
        <Heading
          color="dark"
          variant={"h2"}
          fontSize={["24px", "24px", "56px"]}
          as="h2"
          mb="8px"
        >
          Browse our popular courses
        </Heading>
        <Text textAlign={"center"} maxW="740px" color={"textColor"}>
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </Text>
        <Flex gap={["20px", "20px", "60px"]} my="56px">
          {categories.map((el) => (
            <Flex
              align={"center"}
              justify="center"
              py={["4px", "4px", "12px"]}
              px={["8px", "8px", "16px"]}
              bg={currentCategory === el.slug ? "#fff" : "transparent"}
              cursor={"pointer"}
              onClick={() => setCurrentCategory(el.slug)}
            >
              <Text
                fontSize={["8px", "8px", "16px"]}
                fontWeight="700"
                color={currentCategory === el.slug ? "pryColor" : "textColor"}
                lineHeight={["11px", "11px", "22px"]}
              >
                {el.label}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Grid
          w="full"
          templateColumns={[
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
          ]}
          gap="24px"
        >
          {filteredCategoryLists.map((el) => (
            <GridItem>
              <CategoryCard {...el} />
            </GridItem>
          ))}
        </Grid>
        <Button my="40px">Explore all courses</Button>
      </MainContainer>
      <MainContainer
        pt="79px"
        pb="80px"
        display={"flex"}
        alignItems="center"
        flexDir={"column"}
      >
        <Heading
          variant={"h2"}
          as="h2"
          textAlign={["center"]}
          fontSize={["24px", "24px", "56px"]}
          mb="8px"
        >
          What our clients are saying
        </Heading>
        <Text maxW="740px" textAlign={"center"} mb="48px" color="textColor">
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </Text>
        <Box>
          <TestimonialCarousel />
        </Box>
      </MainContainer>
      <MainContainer
        bgColor="pryColor"
        pt="86px"
        pb="98px"
        textAlign={"center"}
      >
        <Text color="white" mb="8px">
          JOIN OUR COMMUNITY
        </Text>
        <Heading
          variant={"h2"}
          as="h2"
          mb="16px"
          color="white"
          maxW="1200px"
          mx="auto"
          fontSize={["24px", "24px", "56px"]}
        >
          Are you ready to connect with the future talent of the tech world
        </Heading>
        <Text textTransform="capitalize" color="white" mb="32px">
          meet up with other techstars and grow together
        </Text>
        <CommunitySection />
        <Button mt="2" variant={"secondary"}>
          join our community
        </Button>
      </MainContainer>
      <MainContainer
        pt="79px"
        display={"flex"}
        alignItems="center"
        flexDir={"column"}
        position="relative"
      >
        <Image
          src="/assets/hero/vector11.svg"
          position={"absolute"}
          right={["5%", "10%"]}
          top={["5%", "10%"]}
        />
        <Image
          src="/assets/hero/vector12.svg"
          position={"absolute"}
          left="0%"
          top="20%"
        />
        <Box textAlign={"center"}>
          <Heading
            variant={"h2"}
            fontSize={["24px", "24px", "56px"]}
            as="h2"
            mb="8px"
          >
            Frequently Asked Questions
          </Heading>
          <Text
            maxW="740px"
            mx="auto"
            textAlign={"center"}
            mb="82px"
            color="textColor"
          >
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </Text>
        </Box>
        <AccordionComponent lists={faqs} />
      </MainContainer>
    </Box>
  );
};

export default HomePage;
