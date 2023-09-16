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
import deleteIcon from "../assets/Borrar.svg";
import arrowIcon from "../assets/Back.svg";
import addIcon from "../assets/Work.svg";
import downloadIcon from "../assets/Descargar.svg";
import { BsSearch } from "react-icons/bs";
import { ReactNode } from "react";
import { useMediaQuery } from "@chakra-ui/react";

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
  paginationComp?: ReactNode;
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
  onClickArrow,
  onClickAdd,
  paginationComp,
}: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <Box
      padding={isHigherThan480 ? "80px" : "10px"}
      pt="20px"
      position="relative"
      width="100%"
      overflow="hidden"
    >
      <Box
        display="flex"
        ml={isHigherThan480 ? "-30px" : "-10px"}
        alignItems="center"
      >
        <Image cursor="pointer" onClick={onClickArrow} src={arrowIcon} />
        <Heading fontSize={isHigherThan480 ? "30px" : "20px"}>{set}</Heading>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="40px">
        <Box
          display="flex"
          alignItems="center"
          gap={isHigherThan480 ? "40px" : "10px"}
        >
          <Box cursor="pointer" display="flex" alignItems="center" gap="10px">
            <Image width={isHigherThan480 ? "20px" : "10px"} src={deleteIcon} />
            <Text
              fontWeight="700"
              fontSize={isHigherThan480 ? "18px" : "12px"}
              color="#3737EC"
            >
              Borrar selección
            </Text>
          </Box>
          <Box cursor="pointer" display="flex" alignItems="center" gap="10px">
            <Image
              width={isHigherThan480 ? "20px" : "10px"}
              src={downloadIcon}
            />
            <Text
              fontWeight="700"
              fontSize={isHigherThan480 ? "18px" : "12px"}
              color="#3737EC"
            >
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
          height={isHigherThan480 ? "40px" : "28px"}
          borderRadius="30px"
          padding="10px"
          onClick={onClickAdd}
          _active={{ bgColor: "#6495ED", color: "#ffffff" }}
          _hover={{ bgColor: "" }}
        >
          <Image width={isHigherThan480 ? "20px" : "10px"} src={addIcon} />
          <Text
            _active={{ bgColor: "#6495ED", color: "#ffffff" }}
            fontWeight="700"
            fontSize={isHigherThan480 ? "18px" : "12px"}
            color="#3737EC"
          >
            Agregar
          </Text>
        </Box>
      </Box>

      <Box
        mt="40px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={isHigherThan480 ? "30px" : "6px"}
        overflowX={isHigherThan480 ? "unset" : "auto"}
      >
        <Box
          width={isHigherThan480 ? "unset" : "100%"}
          display="flex"
          alignItems="center"
          gap="10px"
          overflowX={isHigherThan480 ? "unset" : "auto"}
        >
          <Text fontWeight="700" fontSize={isHigherThan480 ? "14px" : "8px"}>
            Todos
          </Text>
          <Checkbox></Checkbox>
        </Box>
        <Box width={isHigherThan480 ? "unset" : "100%"}>
          <Text
            fontWeight="700"
            fontSize={isHigherThan480 ? "14px" : "10px"}
            mb="8px"
          >
            Nombre
          </Text>
          <InputGroup>
            <Input borderRadius="20px"></Input>
            <InputRightElement
              opacity="0.4"
              children={<BsSearch />}
            ></InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <Text
            fontWeight="700"
            fontSize={isHigherThan480 ? "14px" : "10px"}
            mb="8px"
          >
            Identificación
          </Text>
          <InputGroup>
            <Input borderRadius="20px"></Input>
            <InputRightElement
              opacity="0.4"
              children={<BsSearch />}
            ></InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <Text
            fontWeight="700"
            fontSize={isHigherThan480 ? "14px" : "10px"}
            mb="8px"
          >
            {address || area}
          </Text>
          <InputGroup>
            <Input borderRadius="20px"></Input>
            <InputRightElement
              opacity="0.4"
              children={<BsSearch />}
            ></InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <Text
            fontWeight="700"
            fontSize={isHigherThan480 ? "14px" : "10px"}
            mb="8px"
          >
            {phone || position}
          </Text>
          <InputGroup>
            <Input borderRadius="20px"></Input>
            <InputRightElement
              opacity="0.4"
              children={<BsSearch />}
            ></InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <Text
            fontWeight="700"
            fontSize={isHigherThan480 ? "14px" : "10px"}
            mb="8px"
          >
            {city || role}
          </Text>
          <InputGroup>
            <Input borderRadius="20px"></Input>
            <InputRightElement
              opacity="0.4"
              children={<BsSearch />}
            ></InputRightElement>
          </InputGroup>
        </Box>
        <Box>
          <Text
            fontWeight="700"
            fontSize={isHigherThan480 ? "14px" : "10px"}
            mb="8px"
          >
            {state || boss}
          </Text>
          <InputGroup>
            <Input borderRadius="20px"></Input>
            <InputRightElement
              opacity="0.4"
              children={<BsSearch />}
            ></InputRightElement>
          </InputGroup>
        </Box>
        <Text
          fontWeight="700"
          fontSize={isHigherThan480 ? "14px" : "10px"}
          mb="8px"
        >
          Acciones
        </Text>
      </Box>
      <Box>{children}</Box>
      <Box>
        <Box>{paginationComp}</Box>
      </Box>
    </Box>
  );
};

export default EmployPosComp;
