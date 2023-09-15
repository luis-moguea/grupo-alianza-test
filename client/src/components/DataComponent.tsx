import { Box, Checkbox, Text, Image } from "@chakra-ui/react";
import deleteIcon from "../assets/Borrar.svg";
import editIcon from "../assets/Editar.svg";
import NewData from "./NewData";
import { newInfoData } from "../data/newInfoData";
import { useState } from "react";

interface Props {
  name: string;
  id: string;
  area: string;
  position: string;
  role: string;
  boss: string;
  onClickEdit: () => void;
}

const DataComponent = ({
  onClickEdit,
  name,
  id,
  area,
  position,
  role,
  boss,
}: Props) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <Box
      ml="20px"
      mt="20px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="relative"
    >
      <Checkbox></Checkbox>
      <Text fontSize="14px" fontWeight="400">
        {name}
      </Text>
      <Text fontSize="14px" fontWeight="400">
        {id}
      </Text>
      <Text fontSize="14px" fontWeight="400">
        {area}
      </Text>
      <Text fontSize="14px" fontWeight="400">
        {position}
      </Text>
      <Text fontSize="14px" fontWeight="400">
        {role}
      </Text>
      <Text fontSize="14px" fontWeight="400">
        {boss}
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
        />
      )}
    </Box>
  );
};

export default DataComponent;
