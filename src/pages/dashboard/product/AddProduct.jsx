import { Link } from "react-router-dom";
import { useState } from "react";
import HeadingTitle from "../../../components/dashboard/HeadingTitle";
import DashboardLayout from "../../../layout/DashboardLayout";

export default function AddProduct() {
    const [formData, setFormData] = useState({
        name: "",
        image: null,
        category: "",
        price: "",
        stock: "",
        description: "",
    })

    const [isEmpty, setIsEmpty] = useState({
        name: false,
        image: false,
        category: false,
        price: false,
        stock: false,
        description: false,
    });

    return (
        <DashboardLayout>
            <HeadingTitle title="Tambah Produk">
                <li className="breadcrumb-item"><Link to="/dashboard/products" style={{ color: "white" }}>Produk</Link></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#637381" }}>Add Produk</li>
            </HeadingTitle>
        </DashboardLayout>
    )
}
