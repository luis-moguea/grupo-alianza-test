import { Box, Image, Text } from "@chakra-ui/react";
import { dataLogin } from "../data/loginData";
import logo from "../assets/react.svg";

const NavBar = () => {
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
      <Box display="flex" alignItems="center" mr="70px">
        <Image src={logo} mr="8px" />
        <Box>
          <Text fontWeight="700" fontSize="18px" color="#3737EC">
            Elisa Gómez
          </Text>
          <Text fontSize="14px">Administradores</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
