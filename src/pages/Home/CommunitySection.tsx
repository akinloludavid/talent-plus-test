import { Box, Image } from "@chakra-ui/react";

const CommunitySection = () => {
  return (
    <Box
      position={"relative"}
      bg={`url('/assets/globe-bg.png')`}
      bgPos="center"
      w={["100%", "400px", "720px", "720px", "950px"]}
      mx="auto"
      h={["200px", "200px", "550px"]}
    >
      <Image
        src="/assets/community/img1.png"
        alt="community"
        w={["26px", "26px", "64px"]}
        h={["26px", "26px", "64px"]}
        position="absolute"
        top="25%"
        left="5%"
      />
      <Image
        src="/assets/community/img2.png"
        alt="community"
        w={["26px", "26px", "64px"]}
        h={["26px", "26px", "64px"]}
        position="absolute"
        bottom="5%"
        left="50%"
      />
      <Image
        src="/assets/community/img3.png"
        alt="community"
        w={["26px", "26px", "64px"]}
        h={["26px", "26px", "64px"]}
        position="absolute"
        bottom="25%"
        right="5%"
      />
      <Image
        src="/assets/community/img4.png"
        alt="community"
        w={["26px", "26px", "64px"]}
        h={["26px", "26px", "64px"]}
        position="absolute"
        top="30%"
        right="35%"
      />
      <Image
        src="/assets/community/img5.png"
        alt="community"
        w={["26px", "26px", "64px"]}
        h={["26px", "26px", "64px"]}
        position="absolute"
        bottom="3%"
        left="25%"
      />
      <Image
        src="/assets/community/img10.png"
        alt="community"
        w={["26px", "26px", "64px"]}
        h={["26px", "26px", "64px"]}
        position="absolute"
        bottom="40%"
        left="25%"
      />
      <Image
        src="/assets/community/img7.png"
        alt="community"
        w={["22px", "22px", "48px"]}
        h={["22px", "22px", "48px"]}
        position="absolute"
        top="30%"
        left="40%"
      />
      <Image
        src="/assets/community/img8.png"
        alt="community"
        w={["26px", "26px", "64px"]}
        h={["26px", "26px", "64px"]}
        position="absolute"
        bottom="5%"
        right="10%"
      />
      <Image
        src="/assets/community/img9.png"
        alt="community"
        w={["26px", "26px", "64px"]}
        h={["26px", "26px", "64px"]}
        position="absolute"
        top="40%"
        right="20%"
      />
      <Image
        src="/assets/community/img6.png"
        alt="community"
        w={["26px", "26px", "64px"]}
        h={["26px", "26px", "64px"]}
        position="absolute"
        top="25%"
        right="10%"
      />
    </Box>
  );
};

export default CommunitySection;
