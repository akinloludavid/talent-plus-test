import { Box, Image, Square, Text } from "@chakra-ui/react";
interface IFeatureCard {
  icon: string;
  title: string;
  description: string;
  idx: string;
}
const FeatureCard = ({ icon, title, description, idx }: IFeatureCard) => {
  const bgColor: any = {
    "0": "#4C7FBD",
    "1": "#AECD5E",
    "2": "#ED6BA6",
    "3": "#EA6B45",
  };
  return (
    <Box
      borderRadius={"8px"}
      bgColor="white"
      py={["24px", "24px", "32px"]}
      px={["16px", "16px", "24px"]}
      minH="240px"
    >
      <Square
        size={["32px", "32px", "48px"]}
        borderRadius={"4px"}
        mb="24px"
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        bgColor={bgColor[idx]}
      >
        <Image src={icon} />
      </Square>
      <Text fontWeight={"700"} fontSize="16px" color="black" mb="4px">
        {title}
      </Text>
      <Text
        fontSize={["8px", "8px", "12px"]}
        fontWeight="500"
        color="textColor"
        textTransform={["capitalize"]}
        lineHeight={["16px", "28px"]}
      >
        {description}
      </Text>
    </Box>
  );
};

export default FeatureCard;
