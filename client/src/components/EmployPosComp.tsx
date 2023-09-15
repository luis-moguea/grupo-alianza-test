import {
  Box,
  Heading,
  Image,
  Text,
  Checkbox,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import editIcon from "../assets/Editar.svg";
import deleteIcon from "../assets/Borrar.svg";
import arrowIcon from "../assets/Back.svg";
import addIcon from "../assets/Work.svg";
import downloadIcon from "../assets/Descargar.svg";
import { BsSearch } from "react-icons/bs";
import { ReactNode } from "react";

interface Props {
  set: string;
  address?: string;
  phone?: string;
  city?: string;
  state?: string;
  area?: string;
  position?: string;
  role?: string;
  boss?: string;
  children?: ReactNode;
  onClickArrow?: () => void;
  onClickAdd?: () => void;
  onClickDelete?: () => void;
}
const EmployPosComp = ({
  set,
  address,
  area,
  phone,
  position,
  role,
  city,
  boss,
  state,
  children,
}: Props) => {
  return (
    <Box padding="80px">
      <Box display="flex" ml="-30px">
        <Image src={arrowIcon} />
        <Heading>{set}</Heading>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="40px">
        <Box display="flex" alignItems="center" gap="40px">
          <Box cursor="pointer" display="flex" alignItems="center" gap="10px">
            <Image width="20px" src={deleteIcon} />
            <Text fontWeight="700" fontSize="18px" color="#3737EC">
              Borrar selección
            </Text>
          </Box>
          <Box cursor="pointer" display="flex" alignItems="center" gap="10px">
            <Image width="20px" src={downloadIcon} />
            <Text fontWeight="700" fontSize="18px" color="#3737EC">
              Descargar datos
            </Text>
          </Box>
        </Box>
        <Box
          cursor="pointer"
          display="flex"
          alignItems="center"
          gap="10px"
          border="solid 1px #3737EC"
          height="40px"
          borderRadius="30px"
          padding="10px"
        >
          <Image width="20px" src={addIcon} />
          <Text fontWeight="700" fontSize="18px" color="#3737EC">
            Agregar
          </Text>
        </Box>
      </Box>

      <Box
        mt="40px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="30px"
      >
        <Box display="flex" alignItems="center" gap="10px">
          <Text fontWeight="700" fontSize="14px">
            Todos
          </Text>
          <Checkbox></Checkbox>
        </Box>
        <Box>
          <Text fontWeight="700" fontSize="14px" mb="8px">
            Nombre
          </Text>
          <InputGroup>
            <Input></Input>
            <InputRightElement children={<BsSearch />}></InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <Text fontWeight="700" fontSize="14px" mb="8px">
            Identificación
          </Text>
          <InputGroup>
            <Input></Input>
            <InputRightElement children={<BsSearch />}></InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <Text fontWeight="700" fontSize="14px" mb="8px">
            {address || area}
          </Text>
          <InputGroup>
            <Input></Input>
            <InputRightElement children={<BsSearch />}></InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <Text fontWeight="700" fontSize="14px" mb="8px">
            {phone || position}
          </Text>
          <InputGroup>
            <Input></Input>
            <InputRightElement children={<BsSearch />}></InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <Text fontWeight="700" fontSize="14px" mb="8px">
            {city || role}
          </Text>
          <InputGroup>
            <Input></Input>
            <InputRightElement children={<BsSearch />}></InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <Text fontWeight="700" fontSize="14px" mb="8px">
            {state || boss}
          </Text>
          <InputGroup>
            <Input></Input>
            <InputRightElement children={<BsSearch />}></InputRightElement>
          </InputGroup>
        </Box>
        <Text fontWeight="700" fontSize="14px" mb="8px">
          Acciones
        </Text>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default EmployPosComp;
