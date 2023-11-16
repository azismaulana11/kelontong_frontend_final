import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import LoginOwner from "../pages/LoginOwner";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/login-owner" element={<LoginOwner />} />
    </Routes>
  );
};

export default AppRoutes;
