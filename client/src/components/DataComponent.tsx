import { Box, Checkbox, Text, Image } from "@chakra-ui/react";
import deleteIcon from "../assets/Borrar.svg";
import editIcon from "../assets/Editar.svg";
import NewData from "./NewData";
import { newInfoData } from "../data/newInfoData";
import { useMediaQuery } from "@chakra-ui/react";

import { useState, ReactNode, useEffect } from "react";

interface Props {
  name: string;
  id: string;
  area?: string;
  position?: string;
  role?: string;
  boss?: string;
  onClickEdit: () => void;
  children?: ReactNode;
  address?: string;
  city?: string;
  state?: string;
  phone?: string;
  isCheckedNow: boolean;
}

const DataComponent = ({
  onClickEdit,
  name,
  id,
  area,
  position,
  role,
  boss,
  address,
  city,
  phone,
  state,
  isCheckedNow,
}: Props) => {
  const [edit, setEdit] = useState(false);
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");
  const [checked, setChecked] = useState(isCheckedNow);

  useEffect(() => {
    if (!isCheckedNow) {
      setChecked(false);
    }
  }, [checked]);

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <>
      <Box position="relative" overflowX={isHigherThan480 ? "unset" : "auto"}>
        <Box
          width="100%"
          ml="20px"
          mt="30px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          position="relative"
          overflowX={isHigherThan480 ? "unset" : "auto"}
          border="solid 1px #3737EC"
          padding={isHigherThan480 ? "20px" : "5px"}
          borderRadius="8px"
        >
          <Checkbox isChecked={isCheckedNow || undefined}></Checkbox>
          <Text fontSize={isHigherThan480 ? "14px" : "10px"} fontWeight="400">
            {name}
          </Text>
          <Text fontSize={isHigherThan480 ? "14px" : "10px"} fontWeight="400">
            {id}
          </Text>
          <Text fontSize={isHigherThan480 ? "14px" : "10px"} fontWeight="400">
            {area || address}
          </Text>
          <Text fontSize={isHigherThan480 ? "14px" : "10px"} fontWeight="400">
            {position || phone}
          </Text>
          <Text fontSize={isHigherThan480 ? "14px" : "10px"} fontWeight="400">
            {role || city}
          </Text>
          <Text fontSize={isHigherThan480 ? "14px" : "10px"} fontWeight="400">
            {boss || state}
          </Text>
          <Box display="flex" gap="20px">
            <Image
              onClick={handleEdit}
              cursor="pointer"
              width="20px"
              src={editIcon}
            />
            <Image
              onClick={onClickEdit}
              cursor="pointer"
              width="20px"
              src={deleteIcon}
            />
          </Box>
        </Box>
        {edit && (
          <NewData
            set={newInfoData.editPosition.set}
            role={newInfoData.editPosition.role}
            position={newInfoData.editPosition.position}
            name={newInfoData.editPosition.name}
            lastName={newInfoData.editPosition.lastName}
            area={newInfoData.editPosition.area}
            firstColor={newInfoData.editPosition.firstColor}
            borderColor={newInfoData.editPosition.borderColor}
            boss={newInfoData.editPosition.boss}
            onClick={() => setEdit(false)}
            left={newInfoData.editPosition.left}
          />
        )}
      </Box>
    </>
  );
};

export default DataComponent;
