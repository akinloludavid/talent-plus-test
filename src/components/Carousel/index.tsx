import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { testimonials } from "./data";
import { useState } from "react";

const TestimonialCarousel = () => {
  const [slider, setSlider] = useState<Slider | null>(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "-80px",
    slidesToShow: 3.3,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          initialSlide: 0,
          dots: true,
          centerPadding: "20px",
          slidesToShow: 1.05,
          speed: 500,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Box position={"relative"} maxW="1920px" w={"100vw"} mx="auto">
      <Box
        // mx="auto"
        as={Slider}
        {...settings}
        ref={(slider: any) => setSlider(slider)}
      >
        {testimonials.map((el) => (
          <Box
            key={nanoid()}
            bgColor="#FFFFFF"
            borderRadius={"24px"}
            py="40px"
            px="24px"
            w={["90%"]}
            maxW={["96%", "90%"]}
          >
            <Text
              color="textColor"
              fontSize={"14px"}
              fontWeight="500"
              lineHeight="26px"
              mb="20px"
            >
              {el.testimony}
            </Text>
            <Flex gap="8px" align="center">
              <Image src={el.image} w="48px" h="48px" rounded="full" />
              <Box>
                <Text mb="4px" fontWeight={"700"} fontSize="14px" color="black">
                  {el.name}
                </Text>
                <Text color="textColor" fontSize={"12px"} fontWeight="400">
                  {el.role}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialCarousel;
