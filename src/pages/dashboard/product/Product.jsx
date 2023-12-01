import { Link } from "react-router-dom";
import DashboardLayout  from "../../../layout/DashboardLayout";
import deleteIcon from "../../../assets/img/dashboard/delete.svg";
import editIcon from "../../../assets/img/dashboard/edit.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { withSwal } from 'react-sweetalert2';
import HeadingTitle from "../../../components/dashboard/HeadingTitle";

export default withSwal((props, ref) => {
    const BASE_SERVER = "http://localhost:7600";
    const [products, setProducts] = useState([]);
    const { swal, ...rest } = props;

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get("http://localhost:7600/api/v1/products");
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);

    const handleDelete = (id) => async (e) => {
        e.preventDefault();
        try {
            const willDelete = await swal.fire({
                title: 'Apakah ingin menghapus produk ini?',
                text: "Apakah anda yakin",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#624BFF',
                cancelButtonColor: '#DC3545',
                confirmButtonText: 'Ya',
                cancelButtonText: 'Tidak'
            })
            if (willDelete.isConfirmed) {
                await axios.delete(`http://localhost:7600/api/v1/products/${id}`);
                await swal.fire({
                    title: 'Sukses',
                    text: 'Data berhasil dihapus',
                    icon: 'success',
                    confirmButtonColor: '#624BFF',
                    confirmButtonText: 'Oke'
                })
                setProducts(products.filter((product) => product._id !== id));
            }
        } catch (error) {
            console.log(error);
        }
    };

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
                        <div className="card border-0 shadow-sm w-100">
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
                                                                src={product.image}
                                                                alt={product.name}
                                                                style={{ maxWidth: "60px", maxHeight: "60px" }}
                                                            />
                                                        )}
                                                    </td>
                                                    <td>{product.category}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.stock}</td>
                                                    <td>{product.description}</td>
                                                    <td className="d-flex column-gap-2">
                                                        <Link to={`/dashboard/products/edit/${product._id}`}><img src={editIcon} alt="" /></Link>
                                                        <form onSubmit={handleDelete(product._id)}>
                                                            <button type="submit" className="border-0 bg-transparent">
                                                                <img src={deleteIcon} alt="" />
                                                            </button>
                                                        </form>
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
        </DashboardLayout>
    )
})
