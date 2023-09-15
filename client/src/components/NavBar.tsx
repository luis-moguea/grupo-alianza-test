import { Box, Image, Text } from "@chakra-ui/react";
import { dataLogin } from "../data/loginData";
import profilePic from "../assets/Perfil.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log("Navigating to /");
    navigate("/");
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Box
      height="70px"
      padding="30px"
      display="flex"
      justifyContent="space-between"
      bgColor="#F5F5F5"
      alignItems="center"
    >
      <Image
        src={dataLogin.logo}
        height="30px"
        width="100px"
        objectFit="fill"
      />
      <Box display="flex" textAlign="center" alignItems="center" mr="70px">
        <Image
          onClick={handleShow}
          cursor="pointer"
          src={profilePic}
          mr="8px"
        />
        <Box position="relative">
          <Text fontWeight="700" fontSize="18px" color="#3737EC">
            Elisa Gómez
          </Text>
          <Text fontSize="14px">Administradora</Text>
          {show && (
            <Box
              textAlign="left"
              bgColor="#F5F5F5"
              position="absolute"
              zIndex="999"
              mt="8px"
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
