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
              pl="12px"
              pb="12px"
              pt="15px"
              mt="8px"
              pr="40px"
              right="-15%"
              borderRadius="10px"
            >
              <Text userSelect="none" mb="6px">
                Perfil
              </Text>
              <Text userSelect="none" mb="6px">
                Configuraciones
              </Text>
              <Text userSelect="none" mb="6px">
                Soporte
              </Text>
              <div
                onClick={handleNavigate}
                style={{ cursor: "pointer", color: "#3182CE" }}
              >
                <Text>Salir</Text>
              </div>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
