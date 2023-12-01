import { Route, Routes } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import LoginOwner from "../pages/LoginOwner";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Register from "../pages/Register";
import Product from "../pages/Product";
import Details from "../pages/Details";
import Cart from "../pages/Cart";
import DashboardHomepage from "../pages/dashboard/homepage/Homepage";
import DashboardProduct from "../pages/dashboard/product/Product";
import DashboardAddProduct from "../pages/dashboard/product/AddProduct";
import DashboardEditProduct from "../pages/dashboard/product/EditProduct";
import Category from "../pages/dashboard/settings/Category"
import AddCategories from "../pages/dashboard/settings/AddCategories";
import Reward from "../pages/dashboard/settings/Reward"
import AddRewards from "../pages/dashboard/settings/AddRewards"
import EditCategories from "../pages/dashboard/settings/EditCategories";
import EditRewards from "../pages/dashboard/settings/EditRewards";
import StatistikPenjualan from "../pages/dashboard/penjualan/StatistikPenjualan"
import BarangTerjual from "../pages/dashboard/penjualan/BarangTerjual";
import StockBarang from "../pages/dashboard/penjualan/StockBarang";

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
      <Route path="/cart" element={<Cart />}/>
      <Route path="/dashboard" element={<DashboardHomepage />} />
      <Route path="/dashboard/products" element={<DashboardProduct />} />
      <Route path="/dashboard/products/add" element={<DashboardAddProduct />} />
      <Route path="/dashboard/products/edit/:id" element={<DashboardEditProduct />} />
      <Route path="/dashboard/settings/categories" element={<Category />} />
      <Route path="/dashboard/settings/categories/add" element={<AddCategories />} />
      <Route path="/dashboard/settings/categories/edit/:id" element={<EditCategories />}/>
      <Route path="/dashboard/settings/rewards" element={<Reward />} />
      <Route path="/dashboard/settings/rewards/add" element={<AddRewards />}/>
      <Route path="/dashboard/settings/rewards/edit/:id" element={<EditRewards/>}/>
      <Route path="/dashboard/sales-statistics" element={<StatistikPenjualan/>}/>
      <Route path="/dashboard/sold-items" element={<BarangTerjual/>}/>
      <Route path="/dashboard/stock-items" element={<StockBarang/>}/>
    </Routes>
  );
};

export default AppRoutes;

