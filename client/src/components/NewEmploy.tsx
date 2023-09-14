import { Text, Box, Input, Button, SimpleGrid, Image } from "@chakra-ui/react";

const NewEmploy = () => {
  return (
    <>
      <Box>
        <Box>
          <Text>Nuevo empleado</Text>
          <Image />
        </Box>
        <form>
          <SimpleGrid padding="40px" columns={2} columnGap="20px">
            <Box>
              <Text ml="-8px" mt="40px" fontSize="14px">
                Usuario
              </Text>
              <Input borderRadius="20px" type="text"></Input>
            </Box>
            <Box>
              <Text ml="-8px" mt="40px" fontSize="14px">
                Usuario
              </Text>
              <Input borderRadius="20px" type="text"></Input>
            </Box>
            <Box>
              <Text ml="-8px" mt="40px" fontSize="14px">
                Usuario
              </Text>
              <Input borderRadius="20px" type="text"></Input>
            </Box>
            <Box>
              <Text ml="-8px" mt="40px" fontSize="14px">
                Usuario
              </Text>
              <Input borderRadius="20px" type="text"></Input>
            </Box>
            <Box>
              <Text ml="-8px" mt="40px" fontSize="14px">
                Usuario
              </Text>
              <Input borderRadius="20px" type="text"></Input>
            </Box>
            <Box>
              <Text ml="-8px" mt="40px" fontSize="14px">
                Usuario
              </Text>
              <Input borderRadius="20px" type="text"></Input>
            </Box>
          </SimpleGrid>
        </form>
        <Box>
          <Button>Cancelar</Button>
          <Button>Guardar</Button>
        </Box>
      </Box>
    </>
  );
};

export default NewEmploy;
