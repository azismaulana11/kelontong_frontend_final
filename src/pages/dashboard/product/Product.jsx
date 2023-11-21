import HeadingTitle from "../../../components/dashboard/HeadingTitle";
import DashboardLayout from "../../../layout/DashboardLayout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Product() {
    const BASE_SERVER = "http://localhost:5500";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5500/api/v1/products");
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);


    return (
        <DashboardLayout>
            <HeadingTitle title="Produk">
                <li className="breadcrumb-item active" aria-current="page" style={{ color: "black" }}>Produk</li>
            </HeadingTitle>
            <div className="p-4">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <Link to="add" className="btn btn-sm btn-primary p-2 mb-3 fw-bold" style={{ background: "#624BFF", outline: "none", border: "none" }}>Tambah</Link>
                        </div>
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>No</th>
                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Nama</th>
                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Gambar</th>
                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Kategori</th>
                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Harga (Rp)</th>
                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Stok</th>
                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Deskripsi</th>
                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <div className="p-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div>
                                                            <Link to="add" className="btn btn-sm btn-primary p-2 mb-3 fw-bold" style={{ background: "#624BFF", outline: "none", border: "none" }}>Tambah</Link>
                                                        </div>
                                                        <div className="card border-0 shadow-sm">
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive">
                                                                    <table className="table table-borderless">
                                                                        <thead>
                                                                            <tr>
                                                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>No</th>
                                                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Nama</th>
                                                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Gambar</th>
                                                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Kategori</th>
                                                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Harga (Rp)</th>
                                                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Stok</th>
                                                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}>Deskripsi</th>
                                                                                <th className="text-light fw-bold" scope="col" style={{ background: "#624BFF" }}></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {products.length === 0 && (
                                                                                <tr>
                                                                                    <td colSpan="7" className="py-5 fw-bold text-center" style={{ color: "#637381" }}>Tidak ada Produk</td>
                                                                                </tr>
                                                                            )}
                                                                            {products.map((product, index) => (
                                                                                <tr key={index}>
                                                                                    <td>
                                                                                        {index + 1}
                                                                                    </td>
                                                                                    <td>{product.name}</td>
                                                                                    <td>
                                                                                        {product.image && (
                                                                                            <img
                                                                                                src={`${BASE_SERVER}/upload/${product.image}`}
                                                                                                alt={product.image}
                                                                                                style={{ maxWidth: "60px", maxHeight: "60px" }}
                                                                                            />
                                                                                        )}
                                                                                    </td>
                                                                                    <td>{product.category}</td>
                                                                                    <td>{product.price}</td>
                                                                                    <td>{product.stock}</td>
                                                                                    <td>{product.description}</td>
                                                                                    <td className="d-flex column-gap-2">
                                                                                    </td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}