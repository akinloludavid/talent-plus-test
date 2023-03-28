import { Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <>
      <Image
        cursor={"pointer"}
        src="/assets/logo.svg"
        w={["53px", "53px", "130px"]}
        h={["19px", "19px", "47px"]}
      />
    </>
  );
};

export default Logo;
