import { Text, Box, Input, Button, SimpleGrid, Image } from "@chakra-ui/react";
import "../styles/blur.css";
import closeIcon from "../assets/cerrar.svg";

interface Props {
  onClick: () => void;
  set: string;
  name: string;
  lastName: string;
  id?: string;
  phone?: string;
  city?: string;
  state?: string;
  firstColor: string;
  borderColor: string;
  area?: string;
  position?: string;
  role?: string;
  boss?: string;
}

const NewData = ({
  onClick,
  set,
  name,
  lastName,
  id,
  phone,
  city,
  state,
  firstColor,
  borderColor,
  area,
  position,
  role,
  boss,
}: Props) => {
  return (
    <>
      <Box
        mt="40px"
        width="800px"
        height="492px"
        borderRadius="10px"
        bgColor="#ffffff"
        position="absolute"
        boxShadow="2px 1px 5px 3px rgba(0, 0, 0, 0.25)"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          padding="20px"
          borderTopRadius="10px"
          borderBottom={`solid 5px ${borderColor}`}
          bgColor={firstColor}
        >
          <Text fontSize="18px" fontWeight="400" color="#989898">
            {set}
          </Text>
          <Image
            onClick={onClick}
            cursor="pointer"
            width="25px"
            src={closeIcon}
          />
        </Box>
        <form>
          <SimpleGrid padding="40px" pb="0" pt="0" columns={2} columnGap="20px">
            <Box>
              <Text
                mb="8px"
                fontWeight="400"
                userSelect="none"
                ml="-8px"
                mt="40px"
                fontSize="14px"
              >
                {name}
              </Text>
              <Input cursor="default" borderRadius="20px" type="text"></Input>
            </Box>
            <Box>
              <Text
                mb="8px"
                fontWeight="400"
                userSelect="none"
                ml="-8px"
                mt="40px"
                fontSize="14px"
              >
                {lastName}
              </Text>
              <Input cursor="default" borderRadius="20px" type="text"></Input>
            </Box>
            <Box>
              <Text
                mb="8px"
                fontWeight="400"
                userSelect="none"
                ml="-8px"
                mt="40px"
                fontSize="14px"
              >
                {id || area}
              </Text>
              <Input cursor="default" borderRadius="20px" type="text"></Input>
            </Box>
            <Box>
              <Text
                mb="8px"
                fontWeight="400"
                userSelect="none"
                ml="-8px"
                mt="40px"
                fontSize="14px"
              >
                {phone || position}
              </Text>
              <Input cursor="default" borderRadius="20px" type="text"></Input>
            </Box>
            <Box>
              <Text
                mb="8px"
                fontWeight="400"
                userSelect="none"
                ml="-8px"
                mt="40px"
                fontSize="14px"
              >
                {city || role}
              </Text>
              <Input cursor="default" borderRadius="20px" type="text"></Input>
            </Box>
            <Box>
              <Text
                mb="8px"
                fontWeight="400"
                userSelect="none"
                ml="-8px"
                mt="40px"
                fontSize="14px"
              >
                {state || boss}
              </Text>
              <Input cursor="default" borderRadius="20px" type="text"></Input>
            </Box>
          </SimpleGrid>
        </form>
        <Box
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
            onClick={onClick}
            bgColor="#D2D2D2"
            color="#989898"
            fontSize="18px"
          >
            Cancelar
          </Button>
          <Button
            width="112px"
            height="41px"
            borderRadius="20px"
            bgColor="#3737EC"
            color="#ffffff"
            fontSize="18px"
          >
            Guardar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default NewData;
