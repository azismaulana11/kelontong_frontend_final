import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import LoginOwner from "../pages/LoginOwner";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-owner" element={<LoginOwner />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword/>} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
