import { Box, Image, List, Text, ListItem } from "@chakra-ui/react";
import navIcon from "../assets/Nav.svg";
import arrowIcon from "../assets/Flechas verticales.svg";
import homeIcon from "../assets/Home.svg";
import { useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

import "../styles/arrow.css";

import "../styles/arrow.css";

interface Props {
  onClickEmploys: () => void;
  onClickPositions: () => void;
}

const Sidebar = ({ onClickEmploys, onClickPositions }: Props) => {
  const [hide, setHide] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const handleToggleMenu = () => {
    setHide(!hide);
  };

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
    setIsArrowRotated(!isArrowRotated);
  };

  return (
    <Box
      width={hide ? "60px" : isHigherThan480 ? "231px" : "50px"}
      display="block"
      bgColor="#3737EC"
      minHeight="100vh"
      padding="0"
      height="auto"
    >
      <Box
        padding={hide ? "20px" : "50px"}
        display={hide ? "block" : "flex"}
        flexDir="column"
        alignItems="center"
        mt={isHigherThan480 ? "unset" : "-80px"}
      >
        <Image
          display={isHigherThan480 ? "unset" : "none"}
          width="15px"
          src={navIcon}
          _hover={{ cursor: "pointer" }}
          onClick={handleToggleMenu}
        />
      </Box>
      <Box min-height="100vh">
        <Box
          height="30px"
          display="flex"
          alignItems="center"
          _hover={{
            bgColor: "#D2D2D21A",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          pb="5px"
          pt="5px"
        >
          <Text
            display={hide ? "none" : "unset"}
            ml={isHigherThan480 ? "20px" : "5px"}
            color="#ffffff"
            alignItems="center"
            fontSize={isHigherThan480 ? "14px" : "12px"}
          >
            Home
          </Text>
          <Image
            ml={isHigherThan480 ? "20px" : "unset"}
            width="18px"
            display={hide ? "initial" : "none"}
            src={homeIcon}
          />
        </Box>
        <Box
          onClick={handleToggleOptions}
          mt="15px"
          display={isHigherThan480 ? "flex" : "block"}
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          padding={isHigherThan480 ? "20px" : "5px"}
          pt="5px"
          pb="5px"
          _hover={{
            bgColor: "#D2D2D21A",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          <Text
            fontSize={isHigherThan480 ? "14px" : "12px"}
            display={hide ? "none" : "unset"}
            color="#ffffff"
          >
            Listas
          </Text>
          <Image
            mt={isHigherThan480 ? "unset" : "10px"}
            ml={isHigherThan480 ? "unset" : "8px"}
            className={isArrowRotated ? "rotate" : ""}
            src={arrowIcon}
            width={isHigherThan480 ? "15px" : "11px"}
            cursor="pointer"
          />
        </Box>
        <List width="100%" display={hide || !showOptions ? "none" : "initial"}>
          <Box
            width="100%"
            p={isHigherThan480 ? "10px 30px" : "2px"}
            _hover={{
              cursor: "pointer",
              backgroundImage:
                "linear-gradient(to left, #06468d, #0047a4, #0045bb, #0041cf, #3239e1)",
            }}
            onClick={onClickEmploys}
          >
            <ListItem
              display={isHigherThan480 ? "unset" : "flex"}
              fontSize={isHigherThan480 ? "14px" : "7px"}
              color="#ffffff"
            >
              Empleados
            </ListItem>
          </Box>
          <Box
            width="100%"
            p={isHigherThan480 ? "10px 30px" : "2px"}
            _hover={{
              cursor: "pointer",
              backgroundImage:
                "linear-gradient(to left, #06468d, #0047a4, #0045bb, #0041cf, #3239e1)",
            }}
            onClick={onClickPositions}
          >
            <ListItem
              display={isHigherThan480 ? "unset" : "flex"}
              fontSize={isHigherThan480 ? "14px" : "7px"}
              color="#ffffff"
              ml={isHigherThan480 ? "unset" : "7px"}
            >
              Cargos
            </ListItem>
          </Box>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
