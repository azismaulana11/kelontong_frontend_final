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
    
    return (
        <DashboardLayout>
            <SweetAlert2 {...swalProps} />
        </DashboardLayout>
    )
}