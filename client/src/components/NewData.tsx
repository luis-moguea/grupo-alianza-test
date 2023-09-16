import { Text, Box, Input, Button, SimpleGrid, Image } from "@chakra-ui/react";
import closeIcon from "../assets/cerrar.svg";
import { useMediaQuery } from "@chakra-ui/react";

interface Props {
  onClick?: () => void;
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
  left: string;
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
  left,
}: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <>
      <Box
        mt="10px"
        width={isHigherThan480 ? "800px" : "250px"}
        mr={isHigherThan480 ? "unset" : "40px"}
        height="492px"
        borderRadius="10px"
        bgColor="#ffffff"
        position="absolute"
        boxShadow="2px 1px 5px 3px rgba(0, 0, 0, 0.25)"
        zIndex="10000"
        left={left}
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
                fontSize={isHigherThan480 ? "14px" : "12px"}
                mb="8px"
                fontWeight="400"
                userSelect="none"
                ml="-8px"
                mt="40px"
              >
                {name}
              </Text>
              <Input
                fontSize={isHigherThan480 ? "14px" : "12px"}
                cursor="default"
                borderRadius="20px"
                type="text"
              ></Input>
            </Box>
            <Box>
              <Text
                mb="8px"
                fontWeight="400"
                userSelect="none"
                ml="-8px"
                mt="40px"
                fontSize={isHigherThan480 ? "14px" : "12px"}
              >
                {lastName}
              </Text>
              <Input
                fontSize={isHigherThan480 ? "14px" : "12px"}
                cursor="default"
                borderRadius="20px"
                type="text"
              ></Input>
            </Box>
            <Box>
              <Text
                mb="8px"
                fontWeight="400"
                userSelect="none"
                ml="-8px"
                mt="40px"
                fontSize={isHigherThan480 ? "14px" : "12px"}
              >
                {id || area}
              </Text>
              <Input
                fontSize={isHigherThan480 ? "14px" : "12px"}
                cursor="default"
                borderRadius="20px"
                type="text"
              ></Input>
            </Box>
            <Box>
              <Text
                fontSize={isHigherThan480 ? "14px" : "12px"}
                mb="8px"
                fontWeight="400"
                userSelect="none"
                ml="-8px"
                mt="40px"
              >
                {phone || position}
              </Text>
              <Input
                fontSize={isHigherThan480 ? "14px" : "12px"}
                cursor="default"
                borderRadius="20px"
                type="text"
              ></Input>
            </Box>
            <Box>
              <Text
                fontSize={isHigherThan480 ? "14px" : "12px"}
                mb="8px"
                fontWeight="400"
                userSelect="none"
                ml="-8px"
                mt="40px"
              >
                {city || role}
              </Text>
              <Input
                fontSize={isHigherThan480 ? "14px" : "12px"}
                cursor="default"
                borderRadius="20px"
                type="text"
              ></Input>
            </Box>
            <Box>
              <Text
                fontSize={isHigherThan480 ? "14px" : "12px"}
                mb="8px"
                fontWeight="400"
                userSelect="none"
                ml="-8px"
                mt="40px"
              >
                {state || boss}
              </Text>
              <Input
                fontSize={isHigherThan480 ? "14px" : "12px"}
                cursor="default"
                borderRadius="20px"
                type="text"
              ></Input>
            </Box>
          </SimpleGrid>
        </form>
        <Box
          display="flex"
          justifyContent="center"
          gap={isHigherThan480 ? "40px" : "20px"}
          pb="40px"
          pt="25px"
        >
          <Button
            width={isHigherThan480 ? "112px" : "80px"}
            height={isHigherThan480 ? "41px" : "30px"}
            borderRadius="20px"
            onClick={onClick}
            bgColor="#D2D2D2"
            color="#989898"
            fontSize={isHigherThan480 ? "18px" : "14px"}
          >
            Cancelar
          </Button>
          <Button
            width={isHigherThan480 ? "112px" : "80px"}
            height={isHigherThan480 ? "41px" : "30px"}
            borderRadius="20px"
            bgColor="#3737EC"
            color="#ffffff"
            fontSize={isHigherThan480 ? "18px" : "14px"}
          >
            Guardar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default NewData;
