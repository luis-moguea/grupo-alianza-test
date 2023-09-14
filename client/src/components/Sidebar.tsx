import { Box, Image, List, Text, ListItem } from "@chakra-ui/react";
import navIcon from "../assets/Nav.svg";
import arrowIcon from "../assets/Flechas verticales.svg";
import { useState } from "react";
import homeIcon from "../assets/Home.svg";
import "../styles/arrow.css";

const Sidebar = () => {
  const [hide, setHide] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const handleToggleMenu = () => {
    setHide(!hide);
  };

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
    setIsArrowRotated(!isArrowRotated);
  };

  return (
    <Box
      width={hide ? "60px" : "231px"}
      display="block"
      bgColor="#3737EC"
      height="100vh"
    >
      <Box
        padding={hide ? "20px" : "50px"}
        display={hide ? "block" : "flex"}
        flexDir="column"
        alignItems="center"
      >
        <Image
          width="15px"
          src={navIcon}
          _hover={{ cursor: "pointer" }}
          onClick={handleToggleMenu}
        />
      </Box>
      <Box>
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
            ml="20px"
            color="#ffffff"
            alignItems="center"
          >
            Home
          </Text>
          <Image
            ml="20px"
            width="18px"
            display={hide ? "initial" : "none"}
            src={homeIcon}
          />
        </Box>
        <Box
          onClick={handleToggleOptions}
          mt="15px"
          display="flex"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          padding="20px"
          pt="5px"
          pb="5px"
          _hover={{
            bgColor: "#D2D2D21A",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          <Text display={hide ? "none" : "unset"} color="#ffffff">
            Listas
          </Text>
          <Image
            className={isArrowRotated ? "rotate" : ""}
            src={arrowIcon}
            width="15px"
            _hover={{ cursor: "pointer" }}
          />
        </Box>
        <List display={hide || !showOptions ? "none" : "initial"}>
          <ListItem
            ml="30px"
            mt="20px"
            mb="10px"
            fontSize="14px"
            color="#ffffff"
            _hover={{ cursor: "pointer" }}
          >
            Empleados
          </ListItem>
          <ListItem
            ml="30px"
            fontSize="14px"
            color="#ffffff"
            _hover={{ cursor: "pointer" }}
          >
            Cargos
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
