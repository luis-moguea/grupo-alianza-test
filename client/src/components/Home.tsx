import { useEffect, useState, useMemo } from "react";
import { Box, Button, Image, Text, Tooltip } from "@chakra-ui/react";
import EmployPosComp from "./EmployPosComp";
import DeletePosComp from "./DeletePosComp";
import DeleteEmployComp from "./DeleteEmployComp";
import NewData from "./NewData";
import Sidebar from "./Sidebar";
import Content from "./Content";
import NavBar from "./NavBar";
import arrowIcon from "../assets/Flechas verticales negra.svg";
import leftArrowIcon from "../assets/arrow-sm-left.svg";
import rightArrowIcon from "../assets/arrow-right.svg";
import DataComponent from "./DataComponent";
import { fakeData } from "../data/fakeData";
import { employPostData } from "../data/employsPosData";
import { newInfoData } from "../data/newInfoData";
import { useMediaQuery } from "@chakra-ui/react";

interface Employ {
  name: string;
  id: string;
  address: string;
  phone: string;
  city: string;
  state: string;
}

interface Position {
  name: string;
  id: string;
  area: string;
  position: string;
  role: string;
  boss: string;
}

const Home = () => {
  const [renderEmploys, setRenderEmploys] = useState(false);
  const [renderCont, setRenderCont] = useState(false);
  const [renderPos, setRenderPos] = useState(false);
  const [deletePosData, setDeletePosData] = useState(false);
  const [deleteEmployData, setDeleteEmployData] = useState(false);
  const [addEmploy, setAddEmploy] = useState(false);
  const [addPosition, setAddPosition] = useState(false);
  const [showOption, setShowOptions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [data, setData] = useState<Position[] | Employ[]>([]);
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  useEffect(() => {
    handleRenderCont();
  }, []);

  const handleRenderEmploys = () => {
    setDeletePosData(false);
    setRenderCont(false);
    setRenderPos(false);
    setRenderEmploys(true);
  };

  const handleRenderPos = () => {
    setDeletePosData(false);
    setRenderCont(false);
    setRenderEmploys(false);
    setRenderPos(true);
  };

  const handleRenderCont = () => {
    setDeletePosData(false);
    setRenderEmploys(false);
    setRenderPos(false);
    setRenderCont(true);
  };

  const handleDeletePos = () => {
    setRenderCont(false);
    setDeletePosData(true);
  };

  const handleDeleteEmploy = () => {
    setRenderCont(false);
    setDeleteEmployData(true);
  };

  const handleAddPosition = () => {
    setAddPosition(true);
  };

  const handleAddEmploy = () => {
    setAddEmploy(true);
  };

  useEffect(() => {
    if (renderPos) {
      setData(fakeData.positions);
    } else if (renderEmploys) {
      setData(fakeData.employs);
    }
  }, [renderPos, renderEmploys]);

  const totalPages = useMemo(
    () => Math.ceil(data.length / itemsPerPage),
    [data.length, itemsPerPage]
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = useMemo(
    () => data.slice(startIndex, endIndex),
    [data, startIndex, endIndex]
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const mouseLeave = () => {
    setTimeout(() => {
      setShowOptions(false);
    }, 4000);
  };

  const handleShowOptions = () => {
    setShowOptions(!showOption);
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
            paginationComp={
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                overflowX="auto"
              >
                <Box>
                  <Box
                    mt="50px"
                    display={isHigherThan480 ? "flex" : "none"}
                    alignItems="center"
                    gap="10px"
                  >
                    <Text>Mostrar de a</Text>{" "}
                    <Tooltip
                      label="Mostrar opciones"
                      aria-label="Mostrar opciones"
                    >
                      <Image
                        className={showOption ? "rotate" : ""}
                        cursor="pointer"
                        width="15px"
                        src={arrowIcon}
                        onClick={handleShowOptions}
                      />
                    </Tooltip>
                  </Box>
                  {showOption && (
                    <Box
                      mt="10px"
                      display="flex"
                      flexDir="column"
                      alignItems="center"
                      onMouseLeave={mouseLeave}
                    >
                      <Text
                        userSelect="none"
                        _hover={{
                          bgColor: "#d2d2d2",
                        }}
                        cursor="pointer"
                        fontSize="12px"
                        fontWeight="400"
                        p="5px"
                        onClick={() => setItemsPerPage(10)}
                      >
                        10 resultados
                      </Text>
                      <Text
                        userSelect="none"
                        fontSize="12px"
                        _hover={{
                          bgColor: "#d2d2d2",
                        }}
                        cursor="pointer"
                        fontWeight="400"
                        p="5px"
                        onClick={() => setItemsPerPage(30)}
                      >
                        30 resultados
                      </Text>
                      <Text
                        userSelect="none"
                        fontSize="12px"
                        _hover={{
                          bgColor: "#d2d2d2",
                        }}
                        cursor="pointer"
                        fontWeight="400"
                        p="5px"
                        onClick={() => setItemsPerPage(50)}
                      >
                        50 resultados
                      </Text>
                    </Box>
                  )}
                </Box>
                <Box display="flex" mt="50px" p="0">
                  <Button
                    borderRadius="20px"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    bgColor="#ffffff"
                    _hover={{
                      bgColor: "#d2d2d2",
                    }}
                  >
                    <Image width="20px" src={leftArrowIcon} />
                  </Button>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <Button
                      color="#3737EC"
                      ml="10px"
                      bgColor="#ffffff"
                      _hover={{
                        bgColor: "#d2d2d2",
                      }}
                      key={index}
                      borderRadius="20px"
                      onClick={() => goToPage(index + 1)}
                      className={currentPage === index + 1 ? "active" : ""}
                    >
                      {index + 1}
                    </Button>
                  ))}
                  <Button
                    bgColor="#ffffff"
                    _hover={{
                      bgColor: "#d2d2d2",
                    }}
                    borderRadius="20px"
                    ml="10px"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <Image width="20px" src={rightArrowIcon} />
                  </Button>
                </Box>
              </Box>
            }
          >
            {currentData.map((el, index) => (
              <DataComponent
                key={index}
                name={el.name}
                id={el.id}
                address={
                  el.hasOwnProperty("address")
                    ? (el as Employ).address
                    : undefined
                }
                city={
                  el.hasOwnProperty("city") ? (el as Employ).city : undefined
                }
                phone={
                  el.hasOwnProperty("phone") ? (el as Employ).phone : undefined
                }
                state={
                  el.hasOwnProperty("state") ? (el as Employ).state : undefined
                }
                onClickEdit={handleDeleteEmploy}
              >
                <p>Hola</p>
              </DataComponent>
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
            paginationComp={
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                overflowX="auto"
              >
                <Box>
                  <Box
                    mt="50px"
                    onMouseLeave={mouseLeave}
                    display={isHigherThan480 ? "flex" : "none"}
                    alignItems="center"
                    gap="10px"
                  >
                    <Text>Mostrar de a</Text>{" "}
                    <Tooltip
                      label="Mostrar opciones"
                      aria-label="Mostrar opciones"
                    >
                      <Image
                        className={showOption ? "rotate" : ""}
                        cursor="pointer"
                        width="15px"
                        src={arrowIcon}
                        onClick={handleShowOptions}
                      />
                    </Tooltip>
                  </Box>
                  {showOption && (
                    <Box
                      mt="10px"
                      display="flex"
                      flexDir="column"
                      alignItems="center"
                    >
                      <Text
                        userSelect="none"
                        _hover={{
                          bgColor: "#d2d2d2",
                        }}
                        cursor="pointer"
                        fontSize="12px"
                        fontWeight="400"
                        p="5px"
                        onClick={() => setItemsPerPage(10)}
                      >
                        10 resultados
                      </Text>
                      <Text
                        userSelect="none"
                        fontSize="12px"
                        _hover={{
                          bgColor: "#d2d2d2",
                        }}
                        cursor="pointer"
                        fontWeight="400"
                        p="5px"
                        onClick={() => setItemsPerPage(30)}
                      >
                        30 resultados
                      </Text>
                      <Text
                        userSelect="none"
                        fontSize="12px"
                        _hover={{
                          bgColor: "#d2d2d2",
                        }}
                        cursor="pointer"
                        fontWeight="400"
                        p="5px"
                        onClick={() => setItemsPerPage(50)}
                      >
                        50 resultados
                      </Text>
                    </Box>
                  )}
                </Box>
                <Box display="flex" mt="50px" p="0">
                  <Button
                    borderRadius="20px"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    bgColor="#ffffff"
                    _hover={{
                      bgColor: "#d2d2d2",
                    }}
                  >
                    <Image width="20px" src={leftArrowIcon} />
                  </Button>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <Button
                      color="#3737EC"
                      ml="10px"
                      bgColor="#ffffff"
                      _hover={{
                        bgColor: "#d2d2d2",
                      }}
                      key={index}
                      borderRadius="20px"
                      onClick={() => goToPage(index + 1)}
                      className={currentPage === index + 1 ? "active" : ""}
                    >
                      {index + 1}
                    </Button>
                  ))}
                  <Button
                    bgColor="#ffffff"
                    _hover={{
                      bgColor: "#d2d2d2",
                    }}
                    borderRadius="20px"
                    ml="10px"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <Image width="20px" src={rightArrowIcon} />
                  </Button>
                </Box>
              </Box>
            }
          >
            {currentData.map((el, index) => (
              <DataComponent
                key={index}
                name={el.name}
                id={el.id}
                area={
                  el.hasOwnProperty("area") ? (el as Position).area : undefined
                }
                role={
                  el.hasOwnProperty("role") ? (el as Position).role : undefined
                }
                position={
                  el.hasOwnProperty("position")
                    ? (el as Position).position
                    : undefined
                }
                boss={
                  el.hasOwnProperty("boss") ? (el as Position).boss : undefined
                }
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
