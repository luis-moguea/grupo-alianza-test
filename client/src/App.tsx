import React from "react";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { Box } from "@chakra-ui/react";
import NewEmploy from "./components/NewData";
import Home from "./components/Home";
import AppRoutes from "./routes/AppRoutes";
import EmployPosComp from "./components/EmployPosComp";

import { employPostData } from "./data/employsPosData";
const App = () => {
  return (
    <>
      <EmployPosComp
        set={employPostData.employs.set}
        address={employPostData.employs.address}
        city={employPostData.employs.city}
        state={employPostData.employs.state}
        phone={employPostData.employs.phone}
      />
    </>
  );
};

export default App;
