import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "../pages/Product"
import Details from "../pages/Details"


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/product" element={<Product />} />
                <Route path="/details/:id" element={<Details />}/>
            </Routes>
        </BrowserRouter>
    )
}