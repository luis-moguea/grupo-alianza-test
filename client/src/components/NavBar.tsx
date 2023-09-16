import { Box, Image, Text } from "@chakra-ui/react";
import { dataLogin } from "../data/loginData";
import profilePic from "../assets/Perfil.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [activeBorder, setActiveBorder] = useState(false);
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log("Navigating to /");
    navigate("/");
  };

  const handleShow = () => {
    setShow(!show);
    setActiveBorder(!activeBorder);
  };

  const mouseLeave = () => {
    setTimeout(() => {
      setShow(false);
      setActiveBorder(false);
    }, 2500);
  };

  return (
    <Box
      width={isHigherThan480 ? "unset" : "auto"}
      height="70px"
      padding={isHigherThan480 ? "30px" : "20px"}
      display="flex"
      justifyContent="space-between"
      bgColor="#F5F5F5"
      alignItems="center"
    >
      <Image
        src={dataLogin.logo}
        height={isHigherThan480 ? "30px" : "22px"}
        width={isHigherThan480 ? "100px" : "60px"}
      />
      <Box
        display="flex"
        textAlign="center"
        alignItems="center"
        mr={isHigherThan480 ? "70px" : "unset"}
      >
        <Image
          border={activeBorder ? "solid 3px #3737EC" : "unset"}
          borderRadius="50px"
          width={isHigherThan480 ? "unset" : "40px"}
          onClick={handleShow}
          cursor="pointer"
          src={profilePic}
          mr="8px"
        />
        <Box position="relative">
          <Text
            fontWeight="700"
            fontSize={isHigherThan480 ? "18px" : "16px"}
            color="#3737EC"
          >
            Elisa Gómez
          </Text>
          <Text fontSize={isHigherThan480 ? "14px" : "12px"}>
            Administradora
          </Text>
          {show && (
            <Box
              onMouseLeave={mouseLeave}
              textAlign="left"
              bgColor="#F5F5F5"
              position="absolute"
              zIndex="999"
              mt="10px"
              right="0"
              borderRadius="10px"
            >
              <Text
                width="100%"
                _hover={{ color: "#ffffff", bgColor: "#3737EC" }}
                userSelect="none"
                mb="6px"
                p="5px 20px"
              >
                Perfil
              </Text>
              <Text
                width="100%"
                _hover={{ color: "#ffffff", bgColor: "#3737EC" }}
                userSelect="none"
                mb="6px"
                p="5px 20px"
              >
                Configuraciones
              </Text>
              <Text
                width="100%"
                _hover={{ color: "#ffffff", bgColor: "#3737EC" }}
                userSelect="none"
                mb="6px"
                p="5px 20px"
              >
                Soporte
              </Text>
              <Box
                borderBottomRadius="10px"
                onClick={handleNavigate}
                width="100%"
                _hover={{ color: "#ffffff", bgColor: "#3737EC" }}
                userSelect="none"
                mb="6px"
                p="5px 20px"
                cursor="pointer"
              >
                <Text>Salir</Text>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
