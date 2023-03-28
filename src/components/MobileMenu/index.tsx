import {
  Drawer,
  Link as ChakraLink,
  DrawerOverlay,
  DrawerContent,
  Button,
  Flex,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { isNavActive } from "../../utils/helpers";
import { navLinks } from "../Navbar/data";
import { IDialog } from "./types";

const MobileMenu = ({ isOpen, onClose }: IDialog) => {
  const navigate = useNavigate();
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="pryColor" pt="48px">
          <DrawerCloseButton color="white" />
          <Flex
            gap="24px"
            flexDir={["column"]}
            align={"center"}
            display={["flex"]}
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
                onClick={() => {
                  navigate(el.route);
                  onClose();
                }}
                color={isNavActive(el.route) ? "#FFFFFF" : "#AAC4E6"}
              >
                {el.label}
              </ChakraLink>
            ))}
            <Button variant={"secondary"}>Enroll now</Button>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
