import { Box, Button, Checkbox, Image, Input, Text } from "@chakra-ui/react";
import { dataLogin } from "../data/loginData";

const Login = () => {
  return (
    <Box display="flex">
      <Box position="relative">
        <Image src={dataLogin.image} />
        <Text
          color="#ffffff"
          fontSize="40px"
          position="absolute"
          top="70%"
          left="38%"
          transform="translate(-50%, -50%)"
        >
          Bienvenido a la mejor plataforma{" "}
          <Text fontWeight="bold">organizacional online.</Text>
          <Text mt="20px" color="#ffffff" fontSize="32px">
            Gestion efectiva del talento humano
          </Text>
        </Text>
      </Box>
      <Box
        width="724px"
        display="block"
        alignItems="center"
        justifyContent="center"
        padding="100px"
      >
        <Image src={dataLogin.logo} pb="40px" />
        <form action="">
          <Text ml="-8px" mt="40px" fontSize="14px">
            Usuario
          </Text>
          <Input borderRadius="20px" type="text"></Input>
          <Text ml="-8px" fontSize="14px" mt="30px">
            Contraseña
          </Text>
          <Input borderRadius="20px" type="password"></Input>
        </form>
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Checkbox mt="30px" mb="30px" fontSize="14px">
            Recordar cuenta
          </Checkbox>
          <Button
            mt="10px"
            borderRadius="20px"
            width="100%"
            bgColor="#3737EC"
            color="#ffffff"
          >
            Iniciar sesión
          </Button>
        </Box>
        <Box>
          <Box display="flex" justifyContent="space-between" mt="15px">
            <Text fontSize="11px">¿Olvidaste tu usuario?</Text>
            <Text fontSize="11px">¿Olvidaste tu contraseña?</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
