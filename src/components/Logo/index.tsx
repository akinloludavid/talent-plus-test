import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <>
      <Image
        onClick={() => navigate("/")}
        cursor={"pointer"}
        src="/assets/logo.svg"
        w={["53px", "53px", "130px"]}
        h={["19px", "19px", "47px"]}
      />
    </>
  );
};

export default Logo;
