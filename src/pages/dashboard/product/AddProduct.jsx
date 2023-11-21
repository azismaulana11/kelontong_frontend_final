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

    const handleChange = (e) => {
        if (e.target.type === "file") {
            setFormData({
                ...formData,
                [e.target.id]: e.target.files[0],
            });
        } else {
            setFormData({ ...formData, [e.target.id]: e.target.value });
        }

        switch (e.target.id) {
            case "name":
                setIsEmpty({ ...isEmpty, name: false });
                break;
            case "image":
                setIsEmpty({ ...isEmpty, image: false });
                break;
            case "category":
                setIsEmpty({ ...isEmpty, category: false });
                break;
            case "price":
                setIsEmpty({ ...isEmpty, price: false });
                break;
            case "stock":
                setIsEmpty({ ...isEmpty, stock: false });
                break;
            case "description":
                setIsEmpty({ ...isEmpty, description: false });
                break;
            default:
                break;
        }
    };

    return (
        <DashboardLayout>
            <HeadingTitle title="Tambah Produk">
                <li className="breadcrumb-item"><Link to="/dashboard/products" style={{ color: "white" }}>Produk</Link></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#637381" }}>Add Produk</li>
            </HeadingTitle>
        </DashboardLayout>
    )
}
