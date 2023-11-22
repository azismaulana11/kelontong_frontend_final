import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SweetAlert2 from 'react-sweetalert2';
import HeadingTitle from "../../../components/dashboard/HeadingTitle";
import DashboardLayout from "../../../layout/DashboardLayout";

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

    const handleValidation = () => {
        setIsEmpty({
            name: formData.name === undefined || formData.name === "",
            image: formData.image === undefined || formData.image === "",
            category: formData.category === undefined || formData.category === "",
            price: formData.price === undefined || formData.price === "",
            stock: formData.stock === undefined || formData.stock === "",
            description: formData.description === undefined || formData.description === "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleValidation();
        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }
            let imageUrl = formData.image;
            if (formData.image instanceof File) {
                const responseUpload = await axios.post("http://localhost:5500/api/v1/upload", formDataToSend);
                imageUrl = responseUpload.data.imageUrl;
            }
            const response = await axios.put(`http://localhost:5500/api/v1/products/${id}`, {
                ...formData,
                image: imageUrl,
            });
            setSwalProps({
                show: true,
                title: 'Sukses',
                text: 'Data berhasil diedit',
                icon: 'success',
            });
            console.log("Data berhasil diedit")
        } catch (error) {
            console.log("Data gagal diedit")
            console.error({
                statusCode: error.response.status,
                message: error.message,
                error: error.response.data,
            });
        }
    };


    return (
        <DashboardLayout>
            <HeadingTitle title="Edit Produk">
                <li className="breadcrumb-item"><Link to="/dashboard/products" style={{ color: "white" }}>Produk</Link></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "#637381" }}>Edit Produk</li>
            </HeadingTitle>
            <div className="p-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card w-100">
                            <div className="card-body">
                                <div className="mb-3 fs-4">
                                    Edit Produk
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Nama</label>
                                        <input type="text" className={`form-control ${isEmpty.name ? 'border border-1 border-danger' : ''}`} id="name" onChange={handleChange} value={formData.name} />
                                        {isEmpty.name && (
                                            <div className="text-danger">Nama tidak boleh kosong</div>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label">Gambar</label>
                                        <input type="file" className={`form-control ${isEmpty.image ? 'border border-1 border-danger' : ''}`} id="image" onChange={handleChange} />
                                        {isEmpty.image && (
                                            <div className="text-danger">Gambar tidak boleh kosong</div>
                                        )}
                                        {imagePreview && (
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                style={{ maxWidth: "100px", maxHeight: "100px", marginTop: "10px" }}
                                            />
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="category" className="form-label">Kategori</label>
                                        <select className={`form-select ${isEmpty.category ? 'border border-1 border-danger' : ''}`} id="category" onChange={handleChange} value={formData.category}>
                                            <option defaultValue={formData.category}>Pilih Kategori</option>
                                            <option value="makanan">Makanan</option>
                                            <option value="alat-rumah-tangga">Alat Rumah Tangga</option>
                                            <option value="minuman">Minuman</option>
                                        </select>
                                        {isEmpty.category && (
                                            <div className="text-danger">Kategori tidak boleh kosong</div>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">Harga</label>
                                        <input type="number" className={`form-control ${isEmpty.price ? 'border border-1 border-danger' : ''}`} id="price" onChange={handleChange} value={formData.price} />
                                        {isEmpty.price && (
                                            <div className="text-danger">Harga tidak boleh kosong</div>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="stock" className="form-label">Stok</label>
                                        <input type="number" className={`form-control ${isEmpty.stock ? 'border border-1 border-danger' : ''}`} id="stock" onChange={handleChange} value={formData.stock} />
                                        {isEmpty.stock && (
                                            <div className="text-danger">Stok tidak boleh kosong</div>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Deskripsi</label>
                                        <textarea className={`form-control ${isEmpty.description ? 'border border-1 border-danger' : ''}`} id="description" rows="3" onChange={handleChange} value={formData.description}></textarea>
                                        {isEmpty.description && (
                                            <div className="text-danger">Deskripsi tidak boleh kosong</div>
                                        )}
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        {/* backbutton */}
                                        <Link to="/dashboard/products" className="btn btn-danger me-3" style={{ outline: "none", border: "none" }}>Kembali</Link>
                                        {/* save button */}
                                        <button type="submit" className="btn btn-primary" style={{ background: "#624BFF", outline: "none", border: "none" }}>Simpan</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SweetAlert2 {...swalProps} />
        </DashboardLayout>
    )
}