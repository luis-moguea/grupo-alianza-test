import { Box, Button, Image, Text } from "@chakra-ui/react";
import deleteIcon from "../assets/Borrar.svg";
import { useMediaQuery } from "@chakra-ui/react";

interface Props {
  onClickCancel: () => void;
}

const DeletePosComp = ({ onClickCancel }: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      width={isHigherThan480 ? "616px" : "250px"}
      textAlign={isHigherThan480 ? "unset" : "center"}
      boxShadow="2px 1px 5px 3px rgba(0, 0, 0, 0.25)"
      height="492px"
      bgColor="#ffffff"
      position="absolute"
      top={isHigherThan480 ? "10%" : "18%"}
      left={isHigherThan480 ? "36%" : "24%"}
      bottom="50%"
      padding="30px"
      borderRadius="10px"
    >
      <Image mt="20px" width="45px" src={deleteIcon} />
      <Text mt="40px" fontSize="32px">
        Borrar cargo
      </Text>
      <Text mt="60px">¿Está seguro de borrar este cargo?</Text>
      <Box
        mt="40px"
        display="flex"
        justifyContent="center"
        gap={isHigherThan480 ? "40px" : "20px"}
        pb="40px"
        pt="25px"
      >
        <Button
          width={isHigherThan480 ? "112px" : "80px"}
          height={isHigherThan480 ? "41px" : "30px"}
          fontSize={isHigherThan480 ? "18px" : "14px"}
          borderRadius="20px"
          bgColor="#3737EC"
          color="#ffffff"
          onClick={onClickCancel}
        >
          Cancelar
        </Button>
        <Button
          width={isHigherThan480 ? "112px" : "80px"}
          height={isHigherThan480 ? "41px" : "30px"}
          fontSize={isHigherThan480 ? "18px" : "14px"}
          borderRadius="20px"
          bgColor="#D2D2D2"
          color="#989898"
        >
          Guardar
        </Button>
      </Box>
    </Box>
  );
};

export default DeletePosComp;
