import { Route, Routes } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import LoginOwner from "../pages/LoginOwner";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Register from "../pages/Register";
import Product from "../pages/Product";
import Details from "../pages/Details";
import DashboardHomepage from "../pages/dashboard/homepage/Homepage";
import DashboardProduct from "../pages/dashboard/product/Product";
import DashboardAddProduct from "../pages/dashboard/product/AddProduct";
import DashboardEditProduct from "../pages/dashboard/product/EditProduct";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-owner" element={<LoginOwner />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/product" element={<Product />} />
      <Route path="/details/:id" element={<Details />}/>
      <Route path="/dashboard" element={<DashboardHomepage />} />
      <Route path="/dashboard/products" element={<DashboardProduct />} />
      <Route path="/dashboard/products/add" element={<DashboardAddProduct />} />
      <Route path="/dashboard/products/edit/:id" element={<DashboardEditProduct />} />
    </Routes>
  );
};

export default AppRoutes;

