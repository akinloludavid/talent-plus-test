import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";

const AccordionComponent = ({ lists }: { lists: any[] }) => {
  return (
    <Accordion w="full" allowToggle maxW="1040px">
      {lists.map((el) => (
        <AccordionItem
          mb={["24px", "24px", "32px"]}
          pb={["24px", "24px", "32px"]}
          borderTop={"none"}
          borderBottom="1px solid #EAEAEA"
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton _hover={{}} border="none">
                <Text
                  as="p"
                  fontSize={["14px", "24px"]}
                  fontWeight="900"
                  color={isExpanded ? "pryColor" : "dark"}
                  flex="1"
                  textAlign="left"
                >
                  {el.question}
                </Text>
                {isExpanded ? (
                  <FaMinus color="#004DB3" />
                ) : (
                  <FaPlus color="#000F24" />
                )}
              </AccordionButton>
              <AccordionPanel
                pb={4}
                fontSize={["8px", "16px"]}
                fontWeight={["500", "600"]}
                textColor="textColor"
                mt="16px"
              >
                {el.answer}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionComponent;
