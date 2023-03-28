import { Box, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
export interface ICategory {
  cover: string;
  category: string;
  ratings: string;
  title: string;
  time: string;
  lessons: string;
  author: string;
  authorImage: string;
  price: string;
}

const CategoryCard = ({
  cover,
  category,
  ratings,
  title,
  time,
  lessons,
  price,
  author,
  authorImage,
}: ICategory) => {
  return (
    <Box py="16px" px={["8px", "20px"]} bg="white">
      <Image src={cover} borderRadius={"4px"} mb="15px" />
      <Flex justify={"space-between"} mb={["10px", "10px", "24px"]}>
        <Flex
          borderRadius={["6px", "6px", "16px"]}
          h={["9px", "24px"]}
          bg="#1E5DCE33"
          color="pryColor"
          justify={"center"}
          align="center"
          px={["8px", "20px"]}
          py={["2px", "4px"]}
        >
          <Text
            color="pryColor"
            fontSize={["4px", "4px", "12px"]}
            fontWeight={["700"]}
            lineHeight="6px"
          >
            {category}
          </Text>
        </Flex>
        <Flex align={"center"}>
          <Text fontSize={["4px", "12px"]} mr="1" color="textColor">
            4.7k
          </Text>
          <Icon as={FaStar} fontSize={["4px", "4px", "18px"]} color="#F6B435" />
          <Text fontSize={["4px", "12px"]} color="textColor" ml="8px">
            ({ratings})
          </Text>
        </Flex>
      </Flex>
      <Heading
        variant={"h3"}
        as="h3"
        color="dark"
        fontWeight={"700"}
        mb={["6px", "18px"]}
      >
        {title}
      </Heading>
      <Flex mb="32px" w="full" justify={"space-between"}>
        <Flex gap="9px" align={"center"}>
          <Image w={["6px"]} h={["6px"]} src="/assets/icons/schedule.svg" />
          <Text fontSize={["4px", "4px", "16px"]} color="textColor">
            {time}
          </Text>
        </Flex>
        <Flex gap="9px" align={"center"}>
          <Image w={["7px"]} h={["7px"]} src="/assets/icons/menu_book.svg" />
          <Text fontSize={["4px", "4px", "16px"]} color="textColor">
            {lessons}
          </Text>
        </Flex>
      </Flex>
      <Flex justify={"space-between"} align="center">
        <Flex gap="8px" align={"center"}>
          <Image
            src={authorImage}
            w={["16px", "16px", "40px"]}
            h={["16px", "16px", "40px"]}
          />
          <Text
            fontSize={["6px", "6px", "16px"]}
            fontWeight="700"
            as="h5"
            color="#000000"
          >
            {author}
          </Text>
        </Flex>
        <Heading
          as="h5"
          color="pryColor"
          fontWeight={"600"}
          fontSize={["8px", "8px", "20px"]}
        >
          {price}
        </Heading>
      </Flex>
    </Box>
  );
};

export default CategoryCard;
