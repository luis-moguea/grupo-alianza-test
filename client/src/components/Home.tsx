import NavBar from "./NavBar";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <NavBar />
      <Box display="flex">
        <Sidebar />
        <Content />
      </Box>
    </>
  );
};

export default Home;
