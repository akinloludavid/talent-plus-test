import { Button, Flex, Icon, Link as ChakraLink } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import MainContainer from "../../layout/MainContainer";
import { navLinks } from "./data";
import { isNavActive } from "../../utils/helpers";
import Logo from "../Logo";
import { IoMdMenu } from "react-icons/io";
import MobileMenu from "../MobileMenu";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleCloseMobileMenu = () => {
    setShowMobileMenu(false);
  };
  const handleOpenMobileMenu = () => {
    setShowMobileMenu(true);
  };
  return (
    <>
      <MobileMenu isOpen={showMobileMenu} onClose={handleCloseMobileMenu} />
      <MainContainer
        py="48px"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems="center"
        bg="pryColor"
      >
        <Logo />
        <Icon
          sx={{
            "@media (min-width:768px)": {
              display: "none",
            },
          }}
          as={IoMdMenu}
          color="white"
          onClick={handleOpenMobileMenu}
        />
        <Flex
          gap="24px"
          align={"center"}
          display={["none", "none", "flex", "flex"]}
        >
          {navLinks.map((el) => (
            <ChakraLink
              key={el.route}
              textDecor="none"
              _hover={{
                textDecoration: "none",
              }}
              fontSize="16px"
              fontWeight={"700"}
              onClick={() => navigate(el.route)}
              color={isNavActive(el.route) ? "#FFFFFF" : "#AAC4E6"}
            >
              {el.label}
            </ChakraLink>
          ))}
          <Button variant={"secondary"}>Enroll now</Button>
        </Flex>
      </MainContainer>
    </>
  );
};

export default Navbar;
