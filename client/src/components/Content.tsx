import { Box, Text, Image } from "@chakra-ui/react";
import techLifeImg from "../assets/Tech Life Remote Life.png";
import addIcon from "../assets/Añadir usuario.svg";
import { useState } from "react";
import NewData from "./NewData";
import { newInfoData } from "../data/newInfoData";

const Content = () => {
  const [addEmploy, setAddEmploy] = useState(false);

  const handleAddEmploy = () => {
    setAddEmploy(true);
  };
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
            <Box
              display="flex"
              justifyContent="center"
              width="50px"
              height="50px"
              borderRadius="25px"
              mt="50px"
              _hover={{
                bgColor: "#d2d2d2",
                cursor: "pointer",
              }}
            >
              <Image
                width="25px"
                src={addIcon}
                _hover={{ cursor: "pointer" }}
                onClick={handleAddEmploy}
              />
            </Box>
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
        {addEmploy && (
          <NewData
            set={newInfoData.newEmploy.set}
            id={newInfoData.newEmploy.id}
            name={newInfoData.newEmploy.name}
            phone={newInfoData.newEmploy.phone}
            borderColor={newInfoData.newEmploy.borderColor}
            firstColor={newInfoData.newEmploy.firstColor}
            lastName={newInfoData.newEmploy.lastName}
            city={newInfoData.newEmploy.city}
            state={newInfoData.newEmploy.state}
            onClick={() => setAddEmploy(false)}
            left={newInfoData.newEmploy.left.main}
          />
        )}
      </Box>
    </>
  );
};

export default Content;
