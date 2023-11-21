import { Link, useParams } from "react-router-dom";
import DashboardLayout from "../../../layouts/DashboardLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import SweetAlert2 from 'react-sweetalert2';
import HeadingTitle from "../../../components/dashboard/HeadingTitle";

export default function EditProduct() {
    const BASE_SERVER = "http://localhost:5500";
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        category: "",
        price: "",
        stock: "",
        description: "",
    })
    const [imagePreview, setImagePreview] = useState("");

    const [isEmpty, setIsEmpty] = useState({
        name: false,
        image: false,
        category: false,
        price: false,
        stock: false,
        description: false,
    });
    const [swalProps, setSwalProps] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get(`http://localhost:5500/api/v1/products/${id}`);
                console.log(response)
                const productData = response.data;
                setFormData({
                    name: productData.name,
                    image: productData.image,
                    category: productData.category,
                    price: productData.price,
                    stock: productData.stock,
                    description: productData.description,
                });
                setImagePreview(`${BASE_SERVER}/upload/${productData.image}`);
            } catch (error) {
                console.error({
                    statusCode: error.response.status,
                    message: error.message,
                    error: error.response.data,
                });
            }
        };

        fetchProductData();
    }, []);

    const handleChange = (e) => {
        if (e.target.id === "image") {
            setFormData({ ...formData, [e.target.id]: e.target.files[0] });
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            if (e.target.files[0]) {
                reader.readAsDataURL(e.target.files[0]);
            } else {
                setImagePreview("");
            }
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
            <SweetAlert2 {...swalProps} />
        </DashboardLayout>
    )
}