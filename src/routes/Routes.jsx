import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import LoginOwner from "../pages/LoginOwner";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/login-owner" element={<LoginOwner />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword/>} />
    </Routes>
  );
};

export default AppRoutes;
