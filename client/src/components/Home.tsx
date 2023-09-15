import NavBar from "./NavBar";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import EmployPosComp from "./EmployPosComp";
import { employPostData } from "../data/employsPosData";
import { fakeData } from "../data/fakeData";
import DataComponent from "./DataComponent";
import DeletePosComp from "./DeletePosComp";
import DeleteEmployComp from "./DeleteEmployComp";
import NewData from "./NewData";
import { newInfoData } from "../data/newInfoData";

const Home = () => {
  const [renderEmploys, setRenderEmploys] = useState(false);
  const [renderCont, setRenderCont] = useState(false);
  const [renderPos, setRenderPos] = useState(false);
  const [deletePosData, setDeletePosData] = useState(false);
  const [deleteEmployData, setDeleteEmployData] = useState(false);
  const [addEmploy, setAddEmploy] = useState(false);
  const [addPosition, setAddPosition] = useState(false);

  useEffect(() => {
    handleRenderCont();
  }, []);

  const handleAddPosition = () => {
    setAddPosition(true);
  };

  const handleAddEmploy = () => {
    setAddEmploy(true);
  };

  const handleRenderEmploys = () => {
    setDeletePosData(false);
    setRenderEmploys(true);
    setRenderCont(false);
    setRenderPos(false);
  };

  const handleRenderPos = () => {
    setDeletePosData(false);
    setRenderCont(false);
    setRenderPos(true);
    setRenderEmploys(false);
  };

  const handleRenderCont = () => {
    setDeletePosData(false);
    setRenderCont(true);
    setRenderEmploys(false);
    setRenderPos(false);
  };

  const handleDeletePos = () => {
    setRenderCont(false);
    setDeletePosData(true);
  };

  const handleDeleteEmploy = () => {
    setRenderCont(false);
    setDeleteEmployData(true);
  };

  return (
    <>
      <NavBar />
      <Box display="flex">
        <Sidebar
          onClickPositions={handleRenderPos}
          onClickEmploys={handleRenderEmploys}
        />
        {renderCont && <Content />}
        {renderEmploys && (
          <EmployPosComp
            set={employPostData.employs.set}
            address={employPostData.employs.address}
            city={employPostData.employs.city}
            state={employPostData.employs.state}
            phone={employPostData.employs.phone}
            onClickArrow={handleRenderCont}
            onClickAdd={handleAddEmploy}
          >
            {fakeData.map((el, index) => (
              <DataComponent
                key={index}
                name={el.name}
                id={el.id}
                area={el.area}
                role={el.role}
                position={el.position}
                boss={el.boss}
                onClickEdit={handleDeleteEmploy}
              />
            ))}
          </EmployPosComp>
        )}
        {renderPos && (
          <EmployPosComp
            set={employPostData.position.set}
            area={employPostData.position.area}
            boss={employPostData.position.boss}
            role={employPostData.position.role}
            onClickArrow={handleRenderCont}
            position={employPostData.position.position}
            onClickAdd={handleAddPosition}
          >
            {fakeData.map((el, index) => (
              <DataComponent
                key={index}
                name={el.name}
                id={el.id}
                area={el.area}
                role={el.role}
                position={el.position}
                boss={el.boss}
                onClickEdit={handleDeletePos}
              />
            ))}
          </EmployPosComp>
        )}
        {deletePosData && (
          <DeletePosComp onClickCancel={() => setDeletePosData(false)} />
        )}
        {deleteEmployData && (
          <DeleteEmployComp onClickCancel={() => setDeleteEmployData(false)} />
        )}
        {addPosition && (
          <NewData
            set={newInfoData.newPosition.set}
            name={newInfoData.newPosition.name}
            borderColor={newInfoData.newPosition.borderColor}
            firstColor={newInfoData.newPosition.firstColor}
            lastName={newInfoData.newPosition.lastName}
            area={newInfoData.newPosition.area}
            position={newInfoData.newPosition.position}
            role={newInfoData.newPosition.role}
            boss={newInfoData.newPosition.boss}
            onClick={() => setAddPosition(false)}
            left={newInfoData.newPosition.left}
          />
        )}
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
            left={newInfoData.newEmploy.left.add}
          />
        )}
      </Box>
    </>
  );
};

export default Home;
