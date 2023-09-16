import { Routes, Route } from "react-router-dom";
import Home from "../components/views/Home";
import Login from "../components/views/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
};

export default AppRoutes;
