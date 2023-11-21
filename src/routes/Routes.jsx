import { Route, Routes } from "react-router-dom";
import Product from "../pages/dashboard/product/Product";
import AddProduct from "../pages/dashboard/product/AddProduct";
import EditProduct from "../pages/dashboard/product/EditProduct";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard/products" element={<Product />} />
            <Route path="/dashboard/products/add" element={<AddProduct />} />
            <Route path="/dashboard/products/edit/:id" element={<EditProduct />} />
        </Routes>
    );
};

export default AppRoutes;