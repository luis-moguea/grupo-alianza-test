import { Box, Button, Image, Text } from "@chakra-ui/react";
import deleteIcon from "../assets/Borrar.svg";

interface Props {
  onClickCancel: () => void;
}

const DeleteEmployComp = ({ onClickCancel }: Props) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      width="616px"
      height="492px"
      bgColor="#ffffff"
      position="absolute"
      top="10%"
      left="32%"
      bottom="50%"
      padding="30px"
      border="solid 1px"
      borderRadius="10px"
    >
      <Image mt="20px" width="45px" src={deleteIcon} />
      <Text mt="40px" fontSize="32px">
        Borrar Empleado
      </Text>
      <Text mt="60px">¿Está seguro de borrar este empleado?</Text>
      <Box
        mt="40px"
        display="flex"
        justifyContent="center"
        gap="40px"
        pb="40px"
        pt="25px"
      >
        <Button
          width="112px"
          height="41px"
          borderRadius="20px"
          bgColor="#3737EC"
          color="#ffffff"
          fontSize="18px"
          onClick={onClickCancel}
        >
          Cancelar
        </Button>
        <Button
          width="112px"
          height="41px"
          borderRadius="20px"
          bgColor="#D2D2D2"
          color="#989898"
          fontSize="18px"
        >
          Guardar
        </Button>
      </Box>
    </Box>
  );
};

export default DeleteEmployComp;
