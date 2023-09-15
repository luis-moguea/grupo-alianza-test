import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
};

export default AppRoutes;
