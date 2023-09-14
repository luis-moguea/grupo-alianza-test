import { Box, Text, Image } from "@chakra-ui/react";
import techLifeImg from "../assets/Tech Life Remote Life.png";
import addIcon from "../assets/Añadir usuario.svg";

const Content = () => {
  return (
    <>
      <Box
        position="relative"
        width="100%"
        display="flex"
        flexDir="column"
        alignItems="center"
        overflow="hidden"
      >
        <Text mt="80px" textAlign="center" fontWeight="300" fontSize="32px">
          Bienvenida!
          <br />
          Elisa Gómez
        </Text>
        <Text mt="50px" fontSize="18px" fontWeight="400px">
          Añade los datos personales de tus empleados y después agrega su cargo
          en tu empresa
        </Text>
        <Box>
          <Box display="flex" flexDir="column" alignItems="center">
            <Image mt="50px" src={addIcon} _hover={{ cursor: "pointer" }} />
            <Text mt="15px" fontWeight="400" fontSize="14px" color="#989898">
              Empieza aquí
            </Text>
          </Box>
        </Box>
        <Image
          position="absolute"
          width="540px"
          height="300px"
          top="50%"
          left="61%"
          bottom="0"
          src={techLifeImg}
        ></Image>
      </Box>
    </>
  );
};

export default Content;
